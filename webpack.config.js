var debug =process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports={
	// context: __dirname + "/src",
	entry: "./src/js/client.jsx",
	devtool: debug ? "sourcemap" : null,
	watchOptions: { aggregateTimeout: 40 },
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({NODE_ENV: JSON.stringify(debug)})
	],
	externals: {
		'react'		: 'React',
		'react-dom'	: 'ReactDOM'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				query: { 
					presets: ['react','es2015']
					//plugins: ['react-html-attrs']
				}
			}
		]
	},
	output: {
		path: __dirname + "/public",
		filename: "js/bundle.js"
	}
	
}