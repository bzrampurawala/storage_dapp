const webpack = require('webpack');
const path = require('path');
module.exports = {
  entry: __dirname + "/view/src/js/index.js",
  output: {
    path: __dirname + "/view/dist/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /src/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          exclude: /node_modules/,
          loader: "babel-loader",
          query: {
            presets: ["react", "es2015"],
            plugins: [
              "react-html-attrs",
              "transform-decorators-legacy",
              "transform-class-properties"
            ]
          }
        }
      }
    ]
  }
};
