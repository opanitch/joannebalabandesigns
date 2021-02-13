module.exports = {
  noEmitOnErrors: true,
  splitChunks: {
    minChunks: 2,
    cacheGroups: {
      vendors: false,
    },
  },
};
