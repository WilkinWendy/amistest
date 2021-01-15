module.exports = {
    entry: "./src/index.ts",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.ts$/, loader: "ts-loader!css-loader" }
        ]
    }
};