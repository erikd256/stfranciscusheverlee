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
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ];
  },
  async headers() {
    return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'Content-Security-Policy',
              value:
                "default-src 'self' https://*.stfranciscus-heverlee.org https://assets.tina.io https://vitals.vercel-insights.com https://identity.tinajs.io https://fonts.googleapis.com/; script-src 'nonce-plausibleanalytics' 'unsafe-inline'; child-src 'none'; style-src 'self'; font-src 'self'; object-src 'none'; base-uri 'none'; require-trusted-types-for 'script';",
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
            }
          ],
        },
      ];
  },
  i18n: {
    locales: ['nl'],
    defaultLocale: 'nl',
  },
});
