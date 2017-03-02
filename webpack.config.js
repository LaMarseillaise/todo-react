const path = require("path")

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "/public"),
    filename: "bundle.js",
    publicPath: "/public/"
  },
  devtool: "source-map",
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: "node_modules"
      },
      {
        include: [
          path.resolve(__dirname, "src")
        ],
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
};
