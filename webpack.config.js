const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const HotModuleReplcement = new webpack.HotModuleReplacementPlugin();

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader']
      }

    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    HotModuleReplcement
  ]
};








// const path = require('path');
// const webpack = require('webpack');
//
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpack = new HtmlWebpackPlugin({
//   template: 'src/index.html',
//   filename: 'index.html',
//   inject: 'body'
// });
//
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const CopyWebpack = new CopyWebpackPlugin([
//   { from: './src/assets', to: 'assets' }
// ]);
//
// const HotModuleReplcement = new webpack.HotModuleReplacementPlugin();
//
// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve('dist'),
//     filename: 'index.js',
//     publicPath: '/'
//   },
//   module: {
//     rules: [
//       { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: {
//         presets: ['es2015', 'react']
//       } }
//     ]
//   },
//   plugins: [
//     HtmlWebpack, HotModuleReplcement, CopyWebpack
//   ]
//
// };
