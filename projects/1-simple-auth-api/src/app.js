const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.get("/health", (req, res) =>
  res.status(200).json({
    isSuccess: true,
  })
);

app.use((err, req, res, next) => {
  const status = res.statusCode || 500;
  res.status(status).json({
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;
