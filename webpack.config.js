const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
		new HtmlWebpackPlugin({
			template: "src/views/products.html",
			filename: "products",
		}),
		new MiniCssExtractPlugin(),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
		}),
	],
	devServer: {
		watchFiles: ["src/**/*.js", "src/**/*.html", "src/**/*.scss"],
		historyApiFallback: {
			rewrites: [
				{
					from: "/",
					to: "src/index.html",
				},
				{
					from: "/products",
					to: "src/products.html",
				},
			],
		},
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
		],
	},
};
