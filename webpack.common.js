const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|s[ac]ss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource" },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
};
