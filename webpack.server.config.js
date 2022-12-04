const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');

const getWebpackConfig = (envs) => {
  dotenv.config({ path: path.resolve(__dirname, `./${envs.env}.env`) });

  return {
    entry: path.resolve(__dirname, './source/server/index.ts'),
    output: {
      path: path.resolve(__dirname, './api'),
      filename: 'index.js',
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
              plugins: [],
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
              emitFile: false,
            },
          },
        },
      ],
    },
    plugins: [new webpack.EnvironmentPlugin(['ENV', 'PUBLIC_PATH'])],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        app: path.resolve(__dirname, './source/app'),
        source: path.resolve(__dirname, './source'),
      },
    },
    mode: envs.env === 'production' ? 'production' : 'development',
    target: 'node',
  };
};

module.exports = getWebpackConfig;
