var app_root = 'src'; // root folder for our react js files. 
var path = require('path');
module.exports = {
	
  entry: [    
    __dirname + '/' + app_root + '/index.js',// setup entry files. we have used array so can be used if more than one entry files are present. 
  ],
  output: {
    path: __dirname + '/public/js',
    publicPath: 'js/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, // to convert our es6-js & jsx code to browser acceptable plain js code using babel loader.
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {        
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
	plugins :[]
  }