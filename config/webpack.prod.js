const { merge } = require('webpack-merge');
const baseConfig = require("./webpack.base");
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin")
const path = require("path");
const rootDir = process.cwd();

module.exports = merge(baseConfig, {
    mode: 'production',
    optimization: {
        minimizer: [
          // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
          // `...`,
          new CssMinimizerPlugin(),
        ],
      },
    devtool: 'hidden-source-map',
    plugins: [
        new CleanWebpackPlugin(), 
        new CopyWebpackPlugin({
            patterns: [{
                from: "*.js",
                context: path.resolve(rootDir, "public"),
                to: path.resolve(rootDir, "dist")
            }]
        })
    ],
    cache: {
        type: 'filesystem',
        buildDependencies: {
            config: [__filename]
        }
    }
})