const withSvgr = require("next-svgr");
module.exports = withSvgr({
  webpack: (config) => {
    return config
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
