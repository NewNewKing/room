module.exports = {
	entry:__dirname + '/public/main.js',
	output:{
		path:__dirname + '/public/dist',
		filename:'bundle.js'
	},
	resolve:{
		alias:{
			'vue$':'vue/dist/vue.esm.js'
		},
		extensions: ['.js', '.vue', '.json']
	},
	module:{
		rules:[
			{
				test:/\.vue$/,
				loader:'vue-loader'
			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},
			{
	        	test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
	        	loader: 'file-loader'
	      	},
	      	{
	        	test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
	        	loader: 'file-loader',
	        	query: {
	         		name: '[name].[ext]?[hash]'
	        	}
	      	}
		]
	}
}