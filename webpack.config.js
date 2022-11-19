const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    ui:'./src/ui.js',
    controller:'./src/controller.js'

  },  
  devtool: 'inline-source-map',
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: 'Weather Api',
//     }),
//   ],
  output: {
    filename: '[name].bundle.js',
    // filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    // clean: true,
  },
};