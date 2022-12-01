const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const getConfig = (envs) => ({
  entry: path.resolve(__dirname, './source/index.tsx'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'app.js',
    publicPath: 'http://localhost:3000/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/i,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript',
            ],
            plugins: [
              envs.env === 'development' && 'react-refresh/babel',
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: 'http://localhost:3000/',
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './source/index.html'),
    }),
    envs.env === 'development' && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  mode: envs.env === 'production' ? 'production' : 'development',
  devServer: {
    port: 3000,
    hot: true,
  },
});

module.exports = getConfig;
