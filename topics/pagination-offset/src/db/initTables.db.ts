import { pool } from "../clients/postgres.client"

export const initTables = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS products (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            description TEXT,
            price INT NOT NULL CHECK(price > 100 AND price <= 5000),
            category VARCHAR(100),
            stock INT CHECK (stock > -1),
            rating DECIMAL(2,1) CHECK (rating > 0 AND rating <= 5),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        `)
}