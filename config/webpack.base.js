const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const rootDir = process.cwd();

module.exports = {
    mode: "development",
    entry: path.resolve(rootDir, 'src/index.js'),
    output: {
        filename: "bundle.[contenthash:8].js",
        path: path.join(rootDir, 'dist')
    },
    module: {
        rules: [
            {
            test: /\.(jsx|js)$/,
            use: 'babel-loader',
            exclude: /node_modules/,
        }, 
        {
            test: /\.(le|c)ss$/,
            use: [
                // 'style-loader',
                MiniCssExtractPlugin.loader,

                {
                    loader: 'css-loader',
                    options: {
                        // modules: true,
                        modules: {
                            localIdentName: "[local]__[hash:base64:5]",
                            mode: "global",
                            exportGlobals: true,
                        },
                    }
                } ,
                'less-loader',
            ],
            exclude: /node_modules/,
        },
        {
            test: /\.(png|jpeg|jpg|svg)$/i,
            type: 'asset'
        }
    ],
    },
    plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        inject: 'body',
        scriptLoading: 'blocking',
    }),
     new MiniCssExtractPlugin({filename: 'css/[name].css'})
    ],
}

