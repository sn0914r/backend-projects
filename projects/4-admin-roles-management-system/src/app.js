const express = require("express");
const cors = require("cors");

const adminRoutes = require("./routes/admin.routes");
const userRoutes = require("./routes/user.routes");

const errorHandler = require("./middlewares/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRoutes);
app.use(userRoutes);

app.use("/health", (req, res) => res.status(200).send("ok"));

app.use(errorHandler);
module.exports = app;
