const withSvgr = require("next-svgr");
const ContentSecurityPolicy = "default-src 'self' https://*.stfranciscus-heverlee.org https://assets.tina.io https://vitals.vercel-insights.com https://identity.tinajs.io https://fonts.googleapis.com/; script-src 'nonce-plausibleanalytics' 'unsafe-inline'; child-src 'none'; style-src 'self'; font-src 'self'; object-src 'none'; base-uri 'none'; require-trusted-types-for 'script';"

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
          value: ContentSecurityPolicy
      }],
      },
    ]
  },
  i18n: {
    locales: ['nl'],
    defaultLocale: 'nl',
  },
});