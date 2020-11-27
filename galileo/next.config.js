const withTM = require('next-transpile-modules')(['@caerusjs/dalton']); // pass the modules you would like to see transpiled

module.exports = withTM({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
