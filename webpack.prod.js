const {merge} = require('webpack-merge')
console.log(merge)
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
// const TerserPlugin = require('terser-webpack-plugin')
const common = require('./webpack.common.js')
module.exports = merge(common, {
  // optimization: {
  //   minimizer: [new TerserPlugin()]
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader' 
      }
    ],
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});