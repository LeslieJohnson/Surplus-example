module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader:
          "babel-loader!surplus-loader"
      },
      {
        test: /\.css$/,
        loader: 'ignore-loader'
      }
    ]
  }
};
