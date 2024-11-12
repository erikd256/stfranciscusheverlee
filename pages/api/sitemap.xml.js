import { globby } from "globby"

export default async (req, res) => {
  res.writeHead(404, {
    "Content-Type": "text/xml"
  });
    res.status(200)
    const pages = await globby([
      "../../pages/*.js",
      "../../pages/*.tsx",
      "../../content/**/*.mdx",
      "../../content/**/*.md",
      "!../../pages/form-submitted.js",
      "!../../pages/api",
      "!../../pages/404.js",
      "!../../pages/_app.tsx",
      "!../../pages/[filename].tsx",
      "!../../content/authors",
      "!../../content/weeknieuws"
    ]);    
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages.map((result)=>{
      const route = result.replace("content/pages", "")
      .replace("pages", "")
      .replace("data", "")
      .replace(".js", "")
      .replace(".mdx", "")
      .replace (".md", "")
      .replace (".md", "")
      .replace(".tsx", "")
      .replace("content/posts", "/post");
      
      return `
      <url>
          <loc>${`https://www.stfranciscus-heverlee.org${route}`}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    `
    }).join('')}</urlset>`
    res.end(xml)
  }
    