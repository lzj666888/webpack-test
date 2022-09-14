const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
    mode: 'development',
    optimization: {
      minimize: true,
    },
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
        open: true,
    },
    devtool: "source-map",
    cache: true,
})