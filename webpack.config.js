const path = require('path');
const aliases = require('./webpack/aliases');
const devServer = require('./webpack/devServer');
const loaders = require('./webpack/loaders');
const optimizations = require('./webpack/optimizations');
const plugins = require('./webpack/plugins');

const ENV = process.env.NODE_ENV;

console.log('**********************************************');
console.log('********** WEBPACK NODE ENVIRONMENT **********');
console.log(ENV);
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
    // *** order is important ***
    polyfills: path.resolve(__dirname, './source/polyfills.ts'),
    vendor: path.resolve(__dirname, './source/vendor.ts'),
    main: path.resolve(__dirname, './source/index.ts'),
  },
  mode: ENV === 'development' ? 'development' : 'production',
  module: {
    rules: loaders(),
  },
  plugins: plugins(),
  optimization: optimizations,
  output: {
    chunkFilename: 'bundles/[name].chunk.js',
    filename: 'bundles/[name].bundle.js',
    path: path.resolve(__dirname, './public'),
    publicPath: '/',
  },
  resolve: {
    // alias: aliases,
    extensions: ['.js', '.ts'],
    modules: [path.resolve(__dirname, './node_modules')],
  },
  stats: { colors: true },
};
