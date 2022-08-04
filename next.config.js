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
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ]
  },
}
