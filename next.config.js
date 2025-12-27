/** next.config.js */
module.exports = {
  // No experimental turbopack key!
    turbopack: {}, // Silences Turbopack warning per Next.js docs
    webpack: (config) => {
      return config;
    },
};
