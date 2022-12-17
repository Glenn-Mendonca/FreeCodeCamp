let express = require("express");
let path = require("path");
let app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

module.exports = app;
