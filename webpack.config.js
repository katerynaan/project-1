const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle[contenthash].js"
    },
    module: {
        rules: [{
            test: /\.html$/i,
            use: "html-loader"
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "public/index.html"
    })]
}