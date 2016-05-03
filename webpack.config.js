var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
})

module.exports = {
	entry: ['webpack/hot/dev-server', './app/index.js'],
	output: {
		path: __dirname + '/dist',
		filename: 'index_bundle.js',
    	publicPath: '/'
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
	        {test: /\.scss$/, loaders: ["style", "css", "sass"]}
		]
	},
	plugins: [HtmlWebpackPluginConfig]
};