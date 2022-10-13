const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")
const rootDir = process.cwd();

module.exports = {
    mode: "development",
    entry: path.resolve(rootDir, 'src/main.jsx'),
    output: {
        filename: "haha.js",
        path: path.join(rootDir, 'dist')
    },
    module: {
        rules: [
        {
            test: /\.(tsx|ts)$/,
            loader: 'ts-loader',
        },
        {
            test: /\.(jsx|js)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ["@babel/preset-react"]
            }
        },
        {
            test: /\.(le|c)ss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    // options: {
                    //     modules: {
                    //         localIdentName: "[local]__[hash:base64:5]",
                    //     },
                    // }
                } ,
                'less-loader',
            ],
            exclude: /node_modules/,
        },
    ],
    },
    plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        inject: 'body',
        scriptLoading: 'blocking',
    }),
    ],
    resolve: {
        alias: {
            "@": path.join(__dirname,"../src"), // 目录快捷方式配置
        },
        extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],//以上文件引入可以省略后缀名
    }
}

