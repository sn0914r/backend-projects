import { pool } from "../clients/postgres"

export const connectPostgres = async () => {
    let client;
    try {
        client = await pool.connect();
        console.log("[INFO]", "Database connected");
    } catch (error) {
        console.error("[ERROR]", "Database connection failed:", error);
        throw error;
    } finally {
        if (client) {
            client.release();
        }
    }
}