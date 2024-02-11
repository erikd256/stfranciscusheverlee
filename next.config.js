const withSvgr = require("next-svgr");

const cspHeader = `
default-src 'self';
script-src 'self';
style-src 'self';
object-src 'none';
base-uri 'self';
connect-src 'self';
font-src 'self';
frame-src 'self';
img-src 'self';
manifest-src 'self';
media-src 'self';
worker-src 'none';
`
 

module.exports = withSvgr({
  webpack: (config, { isServer }) => {
    return config
  },
  compiler: {
    removeConsole: true,
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
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'Referrer-Policy',
              value: 'origin-when-cross-origin',
            },
            {
              key: 'Strict-Transport-Security',
              value: 'max-age=3571000; includeSubDomains; preload',
            },
            {
              key: 'Content-Security-Policy',
              value: cspHeader.replace(/\n/g, ''),
            }
          ],
        },
      ];
  }
});
