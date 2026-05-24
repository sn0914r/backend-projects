import "dotenv/config";
import { app } from "./app";
import { initTables } from "./db/initTables.db";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  initTables();

  app.listen(PORT, () => {
    console.log("[INFO]", "Server is running at", PORT);
  });
};

startServer();
