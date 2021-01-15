const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = (pathsrc) => {
    return path.resolve(__dirname, pathsrc)
}

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devtool: "source-map",
    output: {
        path: resolve('./dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            // { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    plugins: [new HtmlWebpackPlugin()],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
      }
};