import express from "express";
import { errorMiddleware } from "./middlewares/error.middleware";
import { uploadRouter } from "./routes/uploads.routes";

export const app = express();

app.use(express.json());

app.use(uploadRouter);
app.get("/health", (req, res) => res.send("ok"));

app.use(errorMiddleware);
