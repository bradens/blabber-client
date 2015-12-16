/* eslint strict: 0 */
'use strict';

var webpack = require('webpack');
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var baseConfig = require('./webpack.config.base');
var path = require('path')

var config = Object.create(baseConfig);

config.entry = {
  app: './app/index'
};

config.output.publicPath = path.dirname() + '/../dist/'

config.module.loaders.push({
  test: /^((?!\.module).)*\.scss$/,
  loaders: [
    'style-loader',
    'css-loader',
    'sass-loader'
  ]
}, {
  test: /\.module\.scss$/,
  loaders: [
    'style-loader',
    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass'
  ]
});

config.plugins.push(
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    '__DEV__': false,
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false
    }
  })
);

config.target = webpackTargetElectronRenderer(config);

module.exports = config;
