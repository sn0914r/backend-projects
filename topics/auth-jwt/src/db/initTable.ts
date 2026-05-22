import { pool } from "../clients/postgres";

export const initTables = async () => {
  await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            name VARCHAR(100),
            email VARCHAR(100) NOT NULL UNIQUE,
            hashed_password TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `);

  await pool.query(`
        CREATE TABLE IF NOT EXISTS sessions(
            session_id SERIAL PRIMARY KEY,
            user_id INT REFERENCES users(id),
            hashed_refresh_token TEXT,
            expires_at TIMESTAMP,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `);
};
