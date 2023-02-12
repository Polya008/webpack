const HtmlWebpackPlagin = require ('html-webpack-plugin');
const MiniCSSExtractPlagin =  require('mini-css-extract-plagin');

module.exports = {
	module: {
		rules: [
        {
          test: /\.html$/,
  	      loader: "html-loader",
          },

	    {
	      test: /\.css$/,
		  use: [
		  	MiniCSSExtractPlagin.loader;
		  	"css-loader"
		}
			]
	},
	plugins: [
		new HtmlWebpackPlagin({
			template: './src/index.html'
		}),
		new MiniCSSExtractPlagin()
		]

}