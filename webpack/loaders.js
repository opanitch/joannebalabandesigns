const path = require('path');

const postCSSPlugins = require('./postcss.config');

// const dictionaryPath = path.resolve(__dirname, '../assets/dictionary/');
// const dictionaryLoader = {
//   loader: path.resolve('./build/dictionaryLoader/index.js'),
//   options: {
//     delimiters: ['{{@ ', ' @}}'],
//     escape: true,
//     pathToDictionary: dictionaryPath,
//   },
// };
// const dirList = ['../api', '../public', '../source'];
// const resumeDir = path.resolve(__dirname, '../node_modules/resume-md');

module.exports = () => {
  return [
    // Gobal SASS styles
    {
      test: /^(?!.*component).*\.(s?css|sass)$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: postCSSPlugins,
        },
      ],
    },
    // Component-scoped SASS styles
    {
      test: /\.component\.(s?css|sass)$/,
      exclude: /node_modules/,
      include: [path.resolve(__dirname, '../source')],
      use: [
        'to-string-loader',
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: postCSSPlugins,
        },
      ],
    },
    {
      test: /\.html$/,
      use: ['html-loader'],
    },
    // {
    //   test: /\.(js|ts)x?$/,
    //   include: dirList.map((file) => path.resolve(__dirname, file)),
    //   use: [dictionaryLoader],
    // },
    {
      test: /\.ts$/,
      exclude: /node_modules/,
      include: [path.resolve(__dirname, '../source')],
      use: ['babel-loader'],
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
