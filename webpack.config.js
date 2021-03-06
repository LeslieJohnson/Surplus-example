const BabiliPlugin = require('babili-webpack-plugin')
module.exports = {
  entry: "./src/App.js",
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
  },
  plugins: [
    new BabiliPlugin()
  ]
};
