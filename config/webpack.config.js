const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { getDevServerConfig } = require('./setting/devServer');
const { getSplitChunksConfig } = require('./setting/splitChunks');


const { resolveFromRoot } = require("./common/pathResolve")


module.exports = {
    mode: "development",
    entry: resolveFromRoot("./src/index.js"),
    devtool: "source-map",
    output: {
        path: resolveFromRoot('./dist'),
        filename: "[name].js"
    },
    module: {
        rules: [
            // { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    plugins: [new HtmlWebpackPlugin(), new CleanWebpackPlugin()],
    ...getDevServerConfig(),
    optimization: {
        ...getSplitChunksConfig()
    }
};