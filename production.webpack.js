var webpack = require('webpack');
var _ = require('lodash');
var path = require('path');
var config = module.exports = require('./main.webpack.js');

config.output = _.merge(config.output, {
  filename: 'redux-infinite-scroll.min.js'
});

config.module.loaders.push(
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loaders: ['babel-loader']
  }
);

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({minimize: true}),
  new webpack.optimize.OccurenceOrderPlugin()
);
