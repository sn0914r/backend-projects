const express = require("express");
const cors = require("cors");

const router = require("./routes/routes");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.get("/heath", (req, res) => {
  res.status(200).send("ok");
});

app.use(errorHandler);

module.exports = app;
