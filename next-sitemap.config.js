/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://stfranciscus-heverlee.org',
  generateRobotsTxt: true,
  exclude: ['/admin', '/404'],
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: '/admin',
      },
    ],
  },
}

export default config