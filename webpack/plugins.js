const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = () => {
  return [
    // Establishes environment var for things like redux
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(env),
    // }),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   template: 'index.html',
    //   title: 'Joanne Balaban Design',
    // }),
  ];
};
