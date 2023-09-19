const Dotenv = require('dotenv-webpack');
const path = require('path');
module.exports = {

  resolve: {
    fallback: {
      fs: false, // Do not include the fs module
      path: require.resolve('path-browserify'), // Use path-browserify
      os: require.resolve('os-browserify/browser'), // Use os-browserify
    },
  },
  plugins: [

    new Dotenv()
  ]
};
