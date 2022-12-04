const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');

const getConfig = (envs) => {
  dotenv.config({ path: path.resolve(__dirname, `./${envs.env}.env`) });

  return {
    entry: path.resolve(__dirname, './source/index.tsx'),
    output: {
      path: path.resolve(__dirname, './client'),
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
              presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }], '@babel/preset-typescript'],
              plugins: [envs.env === 'development' && 'react-refresh/babel'].filter(Boolean),
            },
          },
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: {
            loader: 'file-loader',
            options: {
              outputPath: 'assets',
              publicPath: `${process.env.PUBLIC_PATH}assets/`,
            },
          },
        },
      ],
    },
    plugins: [envs.env === 'development' && new ReactRefreshWebpackPlugin(), new webpack.EnvironmentPlugin(['ENV', 'PUBLIC_PATH'])].filter(Boolean),
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        app: path.resolve(__dirname, './source/app'),
        source: path.resolve(__dirname, './source'),
      },
    },
    mode: envs.env === 'production' ? 'production' : 'development',
    devServer: {
      port: 3001,
      hot: true,
      headers: { 'Access-Control-Allow-Origin': '*' },
    },
    target: 'web',
  };
};

module.exports = getConfig;
