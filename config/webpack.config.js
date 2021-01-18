const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { getDevServerConfig } = require('./setting/devServer');
const { getSplitChunksConfig } = require('./setting/splitChunks');
const { VueLoaderPlugin } = require('vue-loader')


const { resolveFromRoot } = require("./common/pathResolve")


module.exports = {
    mode: "development",
    entry: {
        app: resolveFromRoot("./src/index.js")
    },
    devtool: "source-map",
    output: {
        path: resolveFromRoot('./dist'),
        filename: "[name]__[hash:6].js"
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ["app"],
            template: "./public/index.html"

        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    ...getDevServerConfig(),
    optimization: {
        ...getSplitChunksConfig()
    }
};