const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode');
const { Pool } = require('pg');

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
      const profileRes = await pool.query("SELECT wa_msg_advice, wa_msg_product FROM profile LIMIT 1");
      const config = profileRes.rows[0];

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
          await client.sendMessage(chatId, message);
          // Mark as completed
          await pool.query("UPDATE service_requests SET status = 'completado' WHERE id = $1", [request.id]);
          console.log(`Message sent to ${request.phone}`);
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
            await client.logout();
            waStatus = 'disconnected';
            lastQr = null;
            await pool.query('UPDATE whatsapp_config SET status = $1, qr_code = NULL, last_update = NOW()', [waStatus]);
        } catch (e) {
            console.error('Error logging out from WhatsApp:', e);
        }
    }
};

module.exports = { initWhatsApp, getStatus, logoutWhatsApp };
