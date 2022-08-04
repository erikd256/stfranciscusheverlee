const withSvgr = require("next-svgr");

module.exports = withSvgr({
  i18n: {
    locales: ["nl"],
    defaultLocale: "nl",
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
    ];
  },
});

module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap')
    }

    return config
  },
}
