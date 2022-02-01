// const functions = require("firebase-functions");

const express = require("express");
const webpack = require("webpack");
const webpackMiddleware = require("webpack-dev-middleware");
const path = require("path");
const app = express();
const webpackConfig = require("./webpack.config");

const port = "port";
const publicDirectoryPath = path.join(__dirname, "./");

app.set(port, 3000);
app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(express.static(publicDirectoryPath));

app.get("*", (req, res) => {
  res.set("Cache-Control", "public, max-age=300, s-maxage=600")
  res.sendFile(path.join(__dirname, "/", "index.html"));
});

app.listen(app.get(port), () => {
  console.log(`Listening on port ${app.get(port)}`);
});

// exports.app = functions.region('us-central1').https.onRequest(app);
