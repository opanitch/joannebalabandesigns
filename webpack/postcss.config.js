module.exports = {
  postcssOptions: {
    ident: 'postcss',
    syntax: 'postcss-scss',
    plugins: [
      require('postcss-import'),
      // ['tailwindcss'],
      // require('tailwindcss'),
      [
        'postcss-preset-env',
        {
          browsers: 'last 2 versions',
          stage: 0,
        },
      ],
      require('autoprefixer'),
    ],
  },
};
