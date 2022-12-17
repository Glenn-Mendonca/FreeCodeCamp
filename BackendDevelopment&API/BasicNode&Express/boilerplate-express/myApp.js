let express = require("express");
let path = require("path");
let app = express();

app.use(path.join(__dirname, "public"), express.static());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

module.exports = app;
