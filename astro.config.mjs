import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import rehypeExternalLinks from 'rehype-external-links';
import siteConfig from './src/data/site-config';
import remarkGfm from 'remark-gfm';

// 根据配置决定是否使用 rehypeExternalLinks 插件
const rehypePlugins = [];

if (siteConfig.enableExternalLinks) {
    rehypePlugins.push([
        rehypeExternalLinks,
        {
            content: {
                type: 'raw',
                value: '<svg xmlns="http://www.w3.org/2000/svg" width="0.8em" height="0.8em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-svg-icon"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>'
            },
            properties: {
                className: ['external-link']
            },
            target: '_blank',
            rel: ['noopener', 'noreferrer']
        }
    ]);
}

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        })
    ],
    markdown: {
        remarkPlugins: [remarkGfm],
        rehypePlugins
    }, 
});
