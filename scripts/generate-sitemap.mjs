import * as fs from 'fs';
import { globbySync } from 'globby';

const WEBSITE_URL = 'https://nicholascannon.com';

/**
 * @param {String} page
 */
const getPageXml = (page) => {
    const pagePath = page.replace('src/pages', '').replace('.tsx', '').replace('.mdx', '');
    const route = pagePath === '/index' ? '' : pagePath;

    return `
        <url>
            <loc>${WEBSITE_URL}${route}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
        </url>
    `.trim();
};

const generateSitemap = () => {
    const pages = globbySync(['src/pages/**/*{.tsx, .mdx}', '!src/pages/_*.tsx', '!src/pages/api']);
    const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages.map((page) => getPageXml(page)).join('\n')}
        </urlset>
    `.trim();
    fs.writeFileSync('public/sitemap.xml', sitemap);

    console.log('info  - Sitemap generated!');
};

generateSitemap();
