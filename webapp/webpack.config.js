const path = require("path");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackLivereloadPlugin = require("webpack-livereload-plugin");

const ROOT = path.resolve(__dirname);
const isProd = process.env.NODE_ENV === "production";

const config = {
	entry: {
		app: `./src/index`,
	},
	output: {
		path: path.resolve(ROOT, `../src/main/resources/static/`),
		filename: "index.js",
		chunkFilename: "[name].js",
		publicPath: `/src/main/resources/static/`,
	},
	watchOptions: {
		poll: true,
	},
	module: {
		rules: [
			/** ******* assets rules ******* */
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
			{
				test: /\.(css|less)$/,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							modules: true,
							importLoaders: 2, // 2 => postcss-loader, less-loader
							localIdentName: isProd
								? "[hash:base64:7]"
								: "[local]___[hash:base64:5]",
						},
					},
					"less-loader",
				],
			},
			/** ******* assets rules ******* */

			/** ******* node_modules rules ******* */
			{
				test: /\.css$/,
				include: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							importLoaders: 1, // 1 => postcss-loader
						},
					},
				],
			},
			/** ******* node_modules rules ******* */
		],
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "index.css",
			chunkFilename: "[name].css",
		}),
		new FriendlyErrorsPlugin(),
	],
	performance: { hints: false },
	stats: {
		// One of the two if I remember right
		entrypoints: false,
		children: false,
	},
};

if (isProd) {
	config.plugins.push(
		new WebpackLivereloadPlugin({
			appendScriptTag: true,
		}),
	);
}

module.exports = config;
