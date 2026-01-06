const express = require("express");
const cors = require("cors");

// ROUTES
const userRoutes = require("./routes/user.routes");
const adminRoutes = require("./routes/admin.routes");
const GlobalErrorHandler = require("./middlewares/globalErrorHandler.middleware");

const app = express();

app.use(express.json());
app.use(cors());

app.use(userRoutes);
app.use("/admin", adminRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
  });
});

app.use(GlobalErrorHandler);
module.exports = app;
