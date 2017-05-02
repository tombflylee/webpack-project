var webpack = require("webpack");
var path = require("path");
module.exports = {
	entry:{
		index:'./app/index/view.jsx',
		userManage:'./app/view.jsx'
	},
	output:{
		path:path.resolve(__dirname,"./public");
		publicPath:path.resolve(__dirname,"./assets");
		filename:"bundle.js";
	},
	module:{
		loaders:[
			{test: /\.scss$/,loader:"style!css!sass"}
		]
	}
}