var debug =process.env.NODE_ENV !== "production";
var path = require("path");
var webpack = require('webpack');


module.exports={
	//context: path.resolve(__dirname, "src"),
	entry: [
			"webpack-dev-server/client",
			"./src/js/client.jsx"
	],
	devtool: debug ? "sourcemap" : null,
	watch: debug ? true : false,
	watchOptions: { aggregateTimeout: 40 },
	plugins: [
	 	new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({NODE_ENV: JSON.stringify(debug)})
	],
	externals: {
		'react'		: 'React',
		'react-dom'	: 'ReactDOM'
	},
	resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.jsx', '.json', '.coffee'] 
  	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				// exclude: /node_modules/,
				include: path.resolve(__dirname, 'src/js'),
				loader: "babel-loader",
				query: { 
					presets: ['react','es2015']
					//plugins: ['react-html-attrs']
				}
			},
			{
				test: /\.css$/,
				loader : 'style!css'//!autoprefixer?browser=last 2 versions'
			},
			{
				test: /\.(svg|png|jpg)$/,
				loader: 'file?name=[name].[ext]'
			}
		]
	},
	output: {
		path: path.resolve(__dirname,"public"),
		publicPath: "/js/",
		filename: "bundle.js"
	},
	devServer: {
		host: "localhost",
		port: 8080,
		contentBase: path.resolve(__dirname,"public"),
		proxy: {
			path: "*", target: "http://localhost:3000"
		}
 	}
	
}