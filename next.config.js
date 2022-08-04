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