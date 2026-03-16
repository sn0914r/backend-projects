const express = require("express");
const cors = require("cors");

const errorHandler = require("./middlewares/error.middleware");

const userRoutes = require("./routes/user.routes");
const adminRoutes = require("./routes/admin.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(userRoutes);
app.use("/admin", adminRoutes);

app.get("/health", (req, res) => {
  res.status(200).send("ok");
});

app.use(errorHandler);

module.exports = app;
