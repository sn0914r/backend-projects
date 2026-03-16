const express = require("express");
const cors = require("cors");

const router = require("./routes/routes");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);
app.get("/health", (req, res) => res.status(200).send("ok"));

app.use(errorHandler);

module.exports = app;
