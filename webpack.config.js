const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  context: __dirname,
  entry: './src/index.js',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public/'),
    filename: 'bundle.js',
  },
  devServer: {
    publicPath: '/public/',
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
};

if (isProduction === true) {
  config.devtool = false;
}

module.exports = config;
