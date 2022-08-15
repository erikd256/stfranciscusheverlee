const withSvgr = require("next-svgr");
module.exports = withSvgr({
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap')
    }
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
  async headers() {
    return [
      {
        // matching all API routes
        source: "/sitemap.xml",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET" }
        ]
      }
    ]
  }
});
