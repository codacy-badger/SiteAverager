const path = require("path");
const webpack = require("webpack");
const CaseSensitivePathsWebpackPlugin = require("case-sensitive-paths-webpack-plugin");

module.exports = {
    entry: {
        form: "./public/components/Form.js",
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "javascripts/[name].bundle.js"
    },
    mode: "none",
    plugins: [
        new CaseSensitivePathsWebpackPlugin(),
    ],
};
