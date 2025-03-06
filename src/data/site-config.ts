import { locales } from '../i18n';

// 使用默认语言的翻译
const locale = 'zh-CN'; // 你的博客默认语言
const i18n = locales[locale];

export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
    locale: 'zh-CN' | 'en-US' | 'zh-TW' | 'ja-JP';
    enableExternalLinks?: boolean;
    giscus: {
        repo: string;
        repoId: string;
        category: string;
        categoryId: string;
        mapping: string;
        strict: string;
        reactionsEnabled: string;
        emitMetadata: string;
        inputPosition: string;
    };
};

const siteConfig: SiteConfig = {
    title: 'Viking',
    subtitle: 'Minimal Astro.js theme',
    logo: {
        src: '/logo.svg',
        alt: 'Viking'
    },
    description: 'A fork of Dante, a single-author blog and portfolio theme for Astro.js, with additional features and improvements. Original theme by justgoodui.com',
    headerNavLinks: [
        {
            text: i18n.navigation.home,
            href: '/'
        },
        {
            text: i18n.navigation.blog,
            href: '/blog'
        },
        {
            text: i18n.navigation.projects,
            href: '/projects'
        },
        {
            text: i18n.navigation.tags,
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: i18n.navigation.about,
            href: '/about'
        },
        {
            text: i18n.navigation.contact,
            href: '/contact'
        },
        {
            text: i18n.navigation.theme,
            href: 'https://github.com/vikingmute/viking-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'Dribbble',
            href: 'https://dribbble.com/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        text: "我是一名热爱技术与创意的全栈开发者。平时喜欢探索新技术，研究开源项目，偶尔写写技术博客分享心得。我相信技术应该服务于人，而不是相反。<a href='/about'>了解更多...</a>",
        image: {
            src: '/avatar.jpg',
            alt: 'Viking avatar'
        },
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8,
    locale,
    enableExternalLinks: true,
    giscus: {
        repo: 'vikingmute/blog',
        repoId: 'MDEwOlJlcG9zaXRvcnkyMTMyNzkzOTk=',
        category: 'Blog Post Comments',
        categoryId: 'DIC_kwDODLZip84CnESC',
        mapping: 'pathname',
        strict: '0',
        reactionsEnabled: '1',
        emitMetadata: '0',
        inputPosition: 'bottom',
    }
};

export default siteConfig;
