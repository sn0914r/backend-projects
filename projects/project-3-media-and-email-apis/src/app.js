const express = require("express");
const cors = require("cors");

const router = require("./routes/routes");
const { GlobalErrorHandler } = require("./middlewares/errors.middleware");

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);
app.get("/health", (req, res) => res.status(200).json({ success: true }));

app.use(GlobalErrorHandler);

module.exports = app;
