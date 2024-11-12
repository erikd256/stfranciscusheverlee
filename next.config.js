const withSvgr = require("next-svgr");


module.exports = withSvgr({
  webpack: (config, { isServer }) => {
    return config
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap.xml",
      },
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
      {
        source: "/stats/:match*",
        destination: "https://analytics.stfranciscus-heverlee.org/:match*"
      },
      {
        source: "/pictures",
        destination: "https://photos.stfranciscus-heverlee.org/"
      },
      {
        source: "/likes",
        destination: "https://likes.stfranciscus-heverlee.org/"
      },
      {
        source: "/viewer/:match*",
        destination: "https://viewer.stfranciscus-heverlee.org/:match*"
      },
      {
        source: "/assets/:match*",
        destination: "https://assets.tina.io/:match*"
      },
    ]  
  },
  async headers() {
    return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'SAMEORIGIN',
            },
            {
              key: 'Strict-Transport-Security',
              value: 'max-age=3571000; includeSubDomains; preload',
            },
          ],
        },
      ];
  }
});
