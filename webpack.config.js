// const transform_decorators_legacy = require('babel-plugin-transform-decorators-legacy');
const webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: __dirname + "/view/src/js/index.js",
  output: {
    path: __dirname + "/view/src/dist",
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
          loader: "babel-loader",
          query: {
            presets: [
              '@babel/preset-env',
              "@babel/preset-react", 
              // "@babel/preset-es2015"
            ],
          }
        }
      }
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
  ]
};
