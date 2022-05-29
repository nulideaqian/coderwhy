const {merge} = require('webpack-merge')

const commonConfig = require('./webpack.comm.config')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './abc',
    port: 8080,
    hot: true
  },
})
