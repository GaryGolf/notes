var express = require("express");
var app = express();
	// var webpackDevMiddleware = require("webpack-dev-middleware");
	// var webpack = require("webpack");
	// var config = require("../webpack.config.js");

	// var compiler = webpack(config);

	// app.use(webpackDevMiddleware(compiler, {
	//     // options
	// }));

app.use("/",express.static("public"));

app.listen(3000, function () {
  console.log('server listening on port 3000');
});

