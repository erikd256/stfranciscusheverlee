/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://stfranciscus-heverlee.org',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/admin'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/admin'],
      },
    ],
  },
}

export default config