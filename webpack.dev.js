const config = require("./webpack.config");
const { merge } = require("webpack-merge");
const path = require("path")

module.exports = merge(config, {
    mode: "development",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "src")
        },
        port: 8080,
        compress: true
    },
    module: {
        rules: [
            { test: /\.tsx?$/i, use: "ts-loader", exclude: /node_modules/ },
            { test: /\.s?css$/i, use: ["style-loader", "css-loader", "sass-loader"] }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
})