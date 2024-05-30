const path = require("path");
const CopyPlugin = require ("copy-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
	app:"./src/js/app.js",
	logIn:"./src/js/log-in.js",
	register:"./src/js/register.js",
	},
	output:{
		path: path.resolve(__dirname, "dist"),
		filename: "[name].bundle.js"
	},
	watch: true,
	plugins: [
		new CopyPlugin({
			patterns: [
				 {from: "src/css", to: "css"},
				 {from: "src/js", to: "js"},
			],
		}),
	],
};