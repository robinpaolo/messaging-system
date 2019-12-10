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

// Default route
app.get("*", (req, res, next) => {
  res.sendFile(path.resolve(outputPath, "index.html"));
});

app.listen(3000);
