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
    locale: 'zh-CN' | 'en-US';
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
        theme: string;
    };
};

const siteConfig: SiteConfig = {
    title: 'Viking',
    subtitle: '一个创造者的故事',
    logo: {
        src: '/logo.svg',
        alt: 'Viking'
    },
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: '首页',
            href: '/'
        },
        {
            text: '博客',
            href: '/blog'
        },
        {
            text: '作品',
            href: '/projects'
        },
        {
            text: '标签',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: '关于',
            href: '/about'
        },
        {
            text: '联系',
            href: '/contact'
        },
        {
            text: '主题',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
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
        // title: 'Hi There & Welcome to My Corner of the Web!',
        text: "我叫 Viking, 是一名生活在上海的全栈开发工程师，也是一位自由职业者。 我创建了<a href='https://easycv.cn'>简单简历</a>, 五分钟打造程序员的金牌简历。 <a href='/about'>阅读更多...</a> ",
        image: {
            src: '/avatar.jpg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        // actions: [
        //     {
        //         text: '关于我',
        //         href: '/about'
        //     }
        // ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8,
    locale: 'zh-CN',
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
        theme: 'noborder_light'
    }
};

export default siteConfig;
