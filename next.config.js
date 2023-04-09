const withSvgr = require("next-svgr");
const ContentSecurityPolicy = `
default-src 'self';
script-src 'self' 'nonce-plausibleanalytics';
child-src 'none';
style-src 'self';
font-src 'self';
object-src 'none';
base-uri 'none';
`

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
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ];
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: [{
          key: 'Content-Security-Policy',
          value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
        }],
      },
    ]
  },
  i18n: {
    locales: ['nl'],
    defaultLocale: 'nl',
  },
});