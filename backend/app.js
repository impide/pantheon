// Dependencies
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

// Connect to MongoDb
mongoose
  .connect(
    "mongodb+srv://Tony:Dln130113@cluster0.ydtveqk.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

// Routes
const postRoutes = require("./routes/posts");

// Express
const app = express();

// Use express
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use("/images", express.static(path.join("backend/images")));

// Header Autorization
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

// Use Routes
app.use("/api/posts", postRoutes);

module.exports = app;