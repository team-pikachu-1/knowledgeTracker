const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  // mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
    publicPath: '/',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    compress: true,
    headers: { 'Access-Control-Allow-Origin': '*'},
    hot: true,
    historyApiFallback: true,
    host: 'localhost',
    port: 8080,
    proxy: {
      '/': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: false,
      },
      '/api/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        }
      },
      {
        test: /.(css|scss)$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
