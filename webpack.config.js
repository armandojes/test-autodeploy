const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const config = {
  entry: path.resolve(__dirname, './source/index.js'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'app.js',
    publicPath: 'http://localhost:3000/'
  },
  module: {
    rules: [
      {
        test: /.js$|.jsx$|.tsx$|.ts$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              [
                '@babel/preset-react',
                { runtime: "automatic" }
              ]
            ],
            plugins: ['react-refresh/babel'],
          }
          
        }
      }
    ],
  },
  devServer: {
    port: 3000,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './source/index.html'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  mode: 'development',
  devtool: 'source-map',
};

module.exports = config;