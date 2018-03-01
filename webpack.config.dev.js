import webpack from 'webpack'
import path from 'path'

export default {
  devtool: 'inline-source-map',

  entry: [
    path.resolve(__dirname, 'src/App.jsx') 
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test:  /\.jsx$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },
      /*{
        test: /\.json?$/,
        loader: 'json-loader'
      },*/ 
      {
        test:/\.css$/,loader:"style-loader!css-loader" 
      }
    ]
  }

}
/*'style-loader','css-loader'*/