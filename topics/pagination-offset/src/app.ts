import express from "express";
import { paginationRouter } from "./routes/pagination.routes";
import { errorMiddleware } from "./middlewares/error.middleware";

export const app = express();

app.use(express.json());
app.use(paginationRouter)

app.get("/health", (req, res) => res.send("ok"));

app.use(errorMiddleware);
