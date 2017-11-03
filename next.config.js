const webpack = require('webpack');

module.exports = {
  webpack: (config, { buildId, dev }) => config,
  webpackDevMiddleware: (config) => {
    config.plugins = (config.plugins || []).push(new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }));
    return config;
  },
};
