const express = require("express");
const cors = require("cors");

const router = require("./routes/crud.router");
const { GlobalErrorHandler } = require("./middlewares/error.middleware");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/crud", router);

app.get("/heath", (req, res) => {
  res.status(200).json({
    success: true,
  });
});

app.use(GlobalErrorHandler);

module.exports = app;
