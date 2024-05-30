const path = require("path");


module.exports = {
	mode: "development",
	entry: {
	app:"./src/js/app.js",
	index:"./src/js/log-in.js",
	register:"./src/js/register.js",
	},
	output:{
		path: path.resolve(__dirname, "dist"),
		filename: "[name].bundle.js"
	},
	watch: true
}