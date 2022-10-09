const path = require('path');
const baseConfig = require ('./webpack.base')
const { merge } = require ("webpack-merge");
const { HotModuleReplacementPlugin,  } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const rootDir = process.cwd();

module.exports = merge(baseConfig, {
  mode: "development",
  entry: path.resolve(rootDir, 'src/main.jsx'),
  output: {
      filename: "bundle.[contenthash:8].js",
      path: path.join(rootDir, 'dist')
  },
  module: {
      rules: [],
  },
      devServer: {
        port: '3001', // 默认是 8080
        hot: true,
        liveReload: false,
        compress: true, // 是否启用 gzip 压缩
        proxy: {
          '/api': {
            target: 'http://0.0.0.0:80',
            pathRewrite: {
              '/api': '',
            },
          },
        },
        open: false,
    },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        inject: 'body',
        scriptLoading: 'blocking',
    }),
    new HotModuleReplacementPlugin({
      
    })
  ],
})