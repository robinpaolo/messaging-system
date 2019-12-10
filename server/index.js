const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const outputPath = path.resolve(process.cwd(), "public");

app.use("/", express.static(outputPath));

// Pages routes
app.get("/login", (req, res, next) => {
  res.sendFile(path.resolve(outputPath, "pages/login.html"));
});

app.get("/registration", (req, res, next) => {
  res.sendFile(path.resolve(outputPath, "pages/registration.html"));
});

app.get("/registrationsuccess", (req, res, next) => {
  res.sendFile(path.resolve(outputPath, "pages/registration-success.html"));
});

app.get("/chatpreview", (req, res, next) => {
  res.sendFile(path.resolve(outputPath, "pages/chat-preview.html"));
});

app.get("/chattopleft", (req, res, next) => {
  res.sendFile(path.resolve(outputPath, "pages/chat-top-left.html"));
});

// Default route
app.get("*", (req, res, next) => {
  res.sendFile(path.resolve(outputPath, "index.html"));
});


app.listen(3000);
