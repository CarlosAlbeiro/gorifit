require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const migrate = async () => {
  try {
    console.log("Starting migration...");

    // 1. Add is_promotion to products
    await pool.query(`ALTER TABLE products ADD COLUMN IF NOT EXISTS is_promotion BOOLEAN DEFAULT false`);
    console.log("- Added is_promotion to products");

    // 2. Add auto_response_active to profile
    await pool.query(`ALTER TABLE profile ADD COLUMN IF NOT EXISTS auto_response_active BOOLEAN DEFAULT true`);
    console.log("- Added auto_response_active to profile");

    // 3. Create clients table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS clients (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        email VARCHAR(255),
        city VARCHAR(255),
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);
    console.log("- Created clients table");

    console.log("Migration completed successfully!");
  } catch (err) {
    console.error("Migration failed:", err);
  } finally {
    await pool.end();
  }
};

migrate();
