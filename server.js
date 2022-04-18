require("dotenv").config({ path: "./config.env" });
const mongoose = require('mongoose')

const express = require("express");
const app = express();
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const morgan = require("morgan");
const cors = require("cors");
connectDB();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.get("/", (req, res, next) => {
  res.send("Ayuh backend running in staging environment!");
});

// Connecting Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT;

const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
