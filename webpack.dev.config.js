var webpack = require("webpack"),
 ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = require('./webpack.config.js'); //import comman webconfig file settings.

 module.exports.devServer = {
        inline : true,
        port : 3333
    },
	 devtool= 'source-map',
	 
module.exports.module.loaders[1] = {
  test: /\.scss$/,// we are going to use scss but you can use css if you want to
  loader: ExtractTextPlugin.extract('css-loader!sass-loader') // short hand for "css-loader" and "style-loader"
};
module.exports.plugins.push(
  new ExtractTextPlugin('../../public/styles/main.css')
);