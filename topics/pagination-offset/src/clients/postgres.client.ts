import { Pool } from "pg";

export const pool = new Pool({
  user: process.env.DB_USER || "sivanandareddy",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_DATABASE || "pagination",
  port: Number(process.env.DB_PORT) || 5432,
});
