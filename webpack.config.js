const path = require('path');
const aliases = require('./webpack/aliases');
const devServer = require('./webpack/devServer');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');

console.log('**********************************************');
console.log('*********** WEBPACK CONFIG ALIASES ***********');
console.log(aliases);
console.log('********** WEBPACK CONFIG DEV SERVER *********');
console.log(devServer);
console.log('*********** WEBPACK CONFIG LOADERS ***********');
console.log(loaders);
console.log('*********** WEBPACK CONFIG PLUGINS ***********');
console.log(plugins);
console.log('************* WEBPACK CONFIG END *************');
console.log('**********************************************');

module.exports = {
  devServer: devServer,
  devtool: 'eval-cheap-module-source-map',
  entry: {
    main: path.resolve(__dirname, 'source/index.ts'),
    polyfills: path.resolve(__dirname, 'source/polyfills.ts'),
  },
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  module: {
    rules: loaders(),
  },
  plugins: plugins(),
  optimization: {
    noEmitOnErrors: true,
  },
  output: {
    // chunkFilename: 'bundles/[name].chunk.js',
    filename: 'bundles/[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    // publicPath: '/',
  },
  resolve: {
    // alias: aliases,
    extensions: ['.js', '.ts'],
    modules: [path.resolve(__dirname, 'node_modules')],
  },
  stats: { colors: true },
};
