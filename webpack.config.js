const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry:__dirname + '/src/main.js',
	output:{
		path:__dirname + '/public',
		filename:'js/bundle.js'
	},
	resolve:{
		extensions: ['.js', '.vue', '.json']
	},
	module:{
		rules:[
			{
				test: /\.vue$/,
		        loader: 'vue-loader',
		        options: {
		          	loaders: {
			            css: ExtractTextPlugin.extract({
			              	use: 'css-loader',
			              	fallback: 'vue-style-loader'
			            })
		          	}
		        }
			},
			{
				test:/\.css$/,
				use:ExtractTextPlugin.extract({
	              	use: 'css-loader',
	              	fallback: 'vue-style-loader'
	            })
			},
			{
	        	test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
	        	loader: 'file-loader',
	        	options:{
	        		name:'font/[name].[ext]'
	        	}
	      	},
	      	{
	        	test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
	        	loader: 'file-loader',
	        	query: {
	         		name: '[name].[ext]?[hash]'
	        	}
	      	}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./src/index.html',
			inject:true,
			title:"回家"
		}),
		new ExtractTextPlugin('css/index.css')
	]
}