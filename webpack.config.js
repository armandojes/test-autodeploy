const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');

const getConfig = (envs) => {
  dotenv.config({ path: path.resolve(__dirname, `./${envs.env}.env`) });

  return {
    entry: path.resolve(__dirname, './source/index.tsx'),
    output: {
      path: path.resolve(__dirname, './build'),
      filename: 'app.js',
      publicPath: process.env.PUBLIC_PATH,
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
              publicPath: process.env.PUBLIC_PATH,
            },
          },
        },
      ],
    },
    plugins: [
      new webpack.EnvironmentPlugin(['PUBLIC_PATH']),
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
  };
};

module.exports = getConfig;
