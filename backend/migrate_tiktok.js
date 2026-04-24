require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function run() {
  try {
    await pool.query("ALTER TABLE profile ADD COLUMN tiktok_video_url TEXT;");
    console.log("Column added successfully");
  } catch (e) {
    console.error("Error adding column:", e.message);
  } finally {
    await pool.end();
  }
}
run();
