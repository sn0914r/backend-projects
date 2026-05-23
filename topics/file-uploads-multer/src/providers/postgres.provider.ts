import { pool } from "../clients/postgres.client"

export const initTables = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS uploads (
            id SERIAL PRIMARY KEY,
            file_name TEXT NOT NULL,
            file_size VARCHAR(15) NOT NULL,
            file_mime_type VARCHAR(10) NOT NULL,
            public_id TEXT NOT NULL,
            url TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        `)
}