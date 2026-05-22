import "dotenv/config";
import app from "./app";
import { initTables } from "./db/initTable";
import { connectPostgres } from "./db/connectDB";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectPostgres();
  await initTables();

  app.listen(PORT, () => {
    console.log("[INFO]", "Server is running at", PORT);
  });
};

startServer();
