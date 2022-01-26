const express = require("express");
const webpack = require("webpack");
const webpackMiddleware = require("webpack-dev-middleware");
const path = require("path");
const app = express();
const webpackConfig = require("./webpack.config");

const port = "port";
const publicDirectoryPath = path.join(__dirname, "./");

app.set(port, process.env.PORT || 3000);
app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(express.static(publicDirectoryPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "app", "index.html"));
});

app.listen(app.get(port), () => {
  console.log(`Listening on port ${app.get(port)}`);
});
