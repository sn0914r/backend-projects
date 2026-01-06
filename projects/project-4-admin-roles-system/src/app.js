const express = require("express");
const cors = require("cors");
const AdminRoutes = require("./routes/admin.routes");
const UserRoutes = require("./routes/user.routes");
const GlobalErrorHandler = require("./middlewares/errorHandler.middleware");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", AdminRoutes);
app.use(UserRoutes);

app.use("/health", (req, res) => res.status(200).json({ success: true }));

app.use(GlobalErrorHandler);

module.exports = app;
