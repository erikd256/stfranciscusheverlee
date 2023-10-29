const fs = require('fs')
const globby = require('globby')

function addPage(page) {
  const path = page.replace('pages', '').replace('content/', '').replace('.js', '').replace('.tsx', '').replace('posts.tsx', '/posts').replace('posts/', '/post/').replace('.mdx', '').replace('.md', '').replace('/post.tsx', 'posts').replace('/home', '')
  const route = path === '/index' ? '' : path

  return `  <url>
    <loc>${`https://www.stfranciscus-heverlee.org${route}`}</loc>
  </url>`
}
async function generateSitemap() {
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    'pages/**/*{.js,.mdx,.tsx}',
    'content/**/*{.js,.mdx,.md}',
    '!content/authors/*{.js,.mdx,.md}',
    '!pages/_*{.js,.tsx,.mdx}',
    '!pages/api',
    '!pages/[filename].tsx',
    '!pages/post/[filename].tsx',
    '!pages/admin.js',
    '!pages/404.js',
    '!pages/form-submitted.js',
    '!content/weeknieuws',
    '!pages/weeknieuws'
  ])
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(addPage).join('\n')}
  </urlset>`

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSitemap()
