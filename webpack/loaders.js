const path = require('path');

// const postCSSPlugins = require('./postcss.config');

const dictionaryPath = path.resolve(__dirname, '../assets/dictionary/');
const dictionaryLoader = {
  loader: path.resolve('./build/dictionaryLoader/index.js'),
  options: {
    delimiters: ['{{@ ', ' @}}'],
    escape: true,
    pathToDictionary: dictionaryPath,
  },
};
const dirList = ['../api', '../public', '../source'];
const resumeDir = path.resolve(__dirname, '../node_modules/resume-md');

module.exports = () => {
  return [
    // {
    //   test: /\.css$/,
    //   use: [
    //     'style-loader',
    //     'css-loader',
    //     {
    //       loader: 'postcss-loader',
    //       options: {
    //         postcssOptions: postCSSPlugins,
    //       },
    //     },
    //   ],
    // },
    // {
    //   test: /\.html$/,
    //   use: ['html-loader'],
    // },
    // {
    //   test: /\.(scss|sass)$/,
    //   use: [
    //     'to-string-loader',
    //     {
    //       loader: 'css-loader',
    //       options: {
    //         sourceMap: true,
    //       },
    //     },
    //     {
    //       loader: 'sass-loader',
    //       options: {
    //         sourceMap: true,
    //       },
    //     },
    //   ],
    //   include: [path.resolve(__dirname, 'source')],
    // },
    // {
    //   test: /\.(js|ts)x?$/,
    //   include: dirList.map((file) => path.resolve(__dirname, file)),
    //   use: [dictionaryLoader],
    // },
    {
      test: /\.ts$/,
      exclude: /node_modules/,
      include: [path.resolve(__dirname, '../source')],
      use: {
        loader: 'babel-loader',
        // {
        //   loader: 'awesome-typescript-loader',
        //   options: {
        //     configFileName: path.resolve(__dirname, 'tsconfig.json'),
        //   },
        // },
        // 'angular2-template-loader',
        // 'angular-router-loader',
      },
    },
    // {
    //   test: /\.svg$/i,
    //   use: ['@svgr/webpack'],
    // },
    // {
    //   test: /\.(png|jpe?g|gif|ico)$/i,
    //   loader: 'file-loader',
    //   options: {
    //     esModule: false,
    //     hash: 'sha512',
    //     digest: 'hex',
    //     publicPath: '/assets/images',
    //     outputPath: './assets/images/',
    //   },
    // },
    // {
    //   test: /\.(eot|ttf|woff|woff2)$/,
    //   loader: 'file-loader',
    //   options: {
    //     name: 'assets/fonts/[name].[ext]',
    //     esModule: false,
    //   },
    // },
  ];
};
