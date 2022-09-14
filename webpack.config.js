const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.[contenthash:8].js",
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(jsx|js)$/,
            use: 'babel-loader',
            exclude: /node_modules/,
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './public/index.html'),
        inject: 'body',
        scriptLoading: 'blocking',
    })],
    devServer: {
        port: '3001', // 默认是 8080
        hot: true,
        // stats: 'errors-only', // 终端仅打印 error
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
    devtool: "source-map",
}

