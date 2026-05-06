const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode');
const { Pool } = require('pg');
const path = require('path');
const fs = require('fs');

let client;
let waStatus = 'disconnected';
let lastQr = null;

const initWhatsApp = (pool) => {
  client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
      handleSIGINT: false,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
  });

  client.on('qr', async (qr) => {
    console.log('QR RECEIVED', qr);
    lastQr = await qrcode.toDataURL(qr);
    waStatus = 'qr-ready';
    await pool.query('UPDATE whatsapp_config SET status = $1, qr_code = $2, last_update = NOW()', [waStatus, lastQr]);
  });

  client.on('ready', async () => {
    console.log('WhatsApp Client is ready!');
    waStatus = 'connected';
    lastQr = null;
    await pool.query('UPDATE whatsapp_config SET status = $1, qr_code = NULL, last_update = NOW()', [waStatus]);
  });

  client.on('authenticated', () => {
    console.log('WhatsApp Authenticated');
  });

  client.on('auth_failure', async (msg) => {
    console.error('WhatsApp Auth failure', msg);
    waStatus = 'disconnected';
    await pool.query('UPDATE whatsapp_config SET status = $1, qr_code = NULL, last_update = NOW()', [waStatus]);
  });

  client.on('disconnected', async (reason) => {
    console.log('WhatsApp Disconnected', reason);
    waStatus = 'disconnected';
    await pool.query('UPDATE whatsapp_config SET status = $1, qr_code = NULL, last_update = NOW()', [waStatus]);
  });

  client.initialize().catch(err => console.error('Error initializing WhatsApp:', err));

  // Polling loop for pending requests (every 3 seconds)
  setInterval(async () => {
    if (waStatus !== 'connected') return;

    try {
      const result = await pool.query("SELECT * FROM service_requests WHERE status = 'pendiente' LIMIT 5");
      const profileRes = await pool.query("SELECT wa_msg_advice, wa_msg_product, auto_response_active FROM profile LIMIT 1");
      const config = profileRes.rows[0];

      if (!config.auto_response_active) return;


      for (const request of result.rows) {
        let message = '';
        if (request.product_info) {
          message = config.wa_msg_product.replace('{product}', request.product_info);
        } else {
          message = config.wa_msg_advice;
        }

        // Clean phone number (remove +, spaces, etc)
        const cleanPhone = request.phone.replace(/\D/g, '');
        // In Colombia, sometimes we need to prepend 57. Handle basic format.
        const formattedPhone = cleanPhone.startsWith('57') ? cleanPhone : `57${cleanPhone}`;
        const chatId = `${formattedPhone}@c.us`;

        console.log(`Sending WhatsApp to ${chatId}...`);
        try {
          let messageSent = false;

          // If there is a product image, try to send it as media
          if (request.product_image && request.product_image !== '/placeholder.png') {
            try {
              let media;
              if (request.product_image.startsWith('http')) {
                media = await MessageMedia.fromUrl(request.product_image);
              } else {
                // Local file resolution
                const cleanPath = request.product_image.replace(/^\/api\//, '').replace(/^\//, '');
                const fullPath = path.join(__dirname, cleanPath);
                
                if (fs.existsSync(fullPath)) {
                  media = MessageMedia.fromFilePath(fullPath);
                } else {
                  console.log(`Image not found at: ${fullPath}`);
                }
              }

              if (media) {
                await client.sendMessage(chatId, media, { caption: message });
                messageSent = true;
              }
            } catch (mediaErr) {
              console.error("Error creating/sending media:", mediaErr.message);
            }
          }

          // Fallback: If media failed or wasn't applicable, send plain text
          if (!messageSent) {
            await client.sendMessage(chatId, message);
          }

          // Mark as completed
          await pool.query("UPDATE service_requests SET status = 'completado' WHERE id = $1", [request.id]);
          console.log(`Message sent successfully to ${request.phone}`);
        } catch (sendErr) {
          console.error(`Failed to send message to ${request.phone}:`, sendErr.message);
        }
      }
    } catch (err) {
      console.error('Error in WhatsApp polling loop:', err.message);
    }
  }, 3000);
};

const getStatus = () => ({ status: waStatus, qr: lastQr });

const logoutWhatsApp = async (pool) => {
    if (client) {
        try {
            console.log('Logging out from WhatsApp...');
            waStatus = 'disconnected';
            lastQr = null;
            await pool.query('UPDATE whatsapp_config SET status = $1, qr_code = NULL, last_update = NOW()', [waStatus]);
            
            await client.logout();
            await client.destroy();
            
            // Re-initialize to get a new QR code
            console.log('Re-initializing WhatsApp client...');
            initWhatsApp(pool);
        } catch (e) {
            console.error('Error logging out from WhatsApp:', e);
            // Even if logout fails, try to destroy and re-init
            try { 
              await client.destroy(); 
              initWhatsApp(pool);
            } catch (e2) { console.error('Critical error re-initializing:', e2); }
        }
    } else {
      initWhatsApp(pool);
    }
};

module.exports = { initWhatsApp, getStatus, logoutWhatsApp };
