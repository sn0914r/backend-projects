const express = require("express");
const cors = require("cors");

const { globalErrorHandler } = require("./middlewares/error.middleware");
const authRouter = require("./routes/auth.router");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/auth", authRouter);

app.get("/health", (req, res) =>
  res.status(200).json({
    isSuccess: true,
  })
);

app.use(globalErrorHandler);

module.exports = app;
