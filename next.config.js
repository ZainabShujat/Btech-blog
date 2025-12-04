
/** next.config.js */
module.exports = {
  experimental: {
    turbopack: {
      // set to project root; helps Next pick the right workspace when multiple lockfiles exist
      root: './'
    }
  }
};
