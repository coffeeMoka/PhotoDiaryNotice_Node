const path = require("path");
const nodeExternals = require("webpack-node-externals");

const src = path.resolve(__dirname, "src");
const dist = path.resolve(__dirname, "dist");

module.exports = {
    mode: "development",
    externals: [nodeExternals()],
    target: "node",
    entry: `${src}/index.ts`,
    output: {
        path: dist,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
}