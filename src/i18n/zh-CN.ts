export default {
    navigation: {
        home: '首页',
        blog: '博客',
        projects: '作品',
        tags: '标签',
        about: '关于',
        contact: '联系',
        theme: '主题'
    },
    pages: {
        home: {
            viewAllPosts: '查看全部文章',
            writing: '文章',
            projects: '作品',
            viewAllProjects: '查看全部作品'
        },
        tags: {
            title: '所有标签',
            description: '浏览所有文章标签，找到您感兴趣的内容。',
            viewArchive: '查看标签归档',
            postCount: {
                one: '篇文章',
                other: '篇文章'
            },
            tagPage: {
                title: '标签文章',
                description: '浏览标签下的精选文章集合'
            }
        },
        blog: {
            title: '博客',
            description: '探索我的文章和见解集合',
            updated: '更新于',
            share: '分享',
            copyLink: '复制链接',
            copied: '已复制',
            prevPost: '上一篇',
            nextPost: '下一篇'
        },
        error: {
            title: '404 未找到',
            description: '404 错误 — 页面未找到',
            heading: '页面未找到',
            backHome: '返回首页'
        },
        projects: {
            title: '作品',
            description: '探索展示我的热情和专业知识的作品集',
            viewNext: '查看下一个',
            prevProject: '上一个项目',
            nextProject: '下一个项目'
        }
    },
    components: {
        pagination: {
            prev: '上一页',
            next: '下一页',
            page: '页',
            current: '当前页',
            of: '共'
        },
        post: {
            readMore: '阅读更多',
            updated: '更新于'
        },
        project: {
            viewProject: '查看项目'
        },
        date: {
            format: {
                long: 'YYYY年MM月DD日',
                short: 'MM月DD日'
            }
        },
        subscribe: {
            title: '订阅我的博客',
            description: '每周更新一次，所有最新文章直接发送到您的收件箱。',
            placeholder: '输入您的邮箱',
            button: '订阅',
            success: '订阅成功！',
            error: '订阅失败，请稍后重试。'
        },
        nav: {
            menuLabel: '打开菜单',
            closeMenuLabel: '关闭菜单',
            themeToggle: '切换主题'
        },
        footer: {
            copyright: '版权所有',
            poweredBy: '由 {name} 驱动',
            allRightsReserved: '保留所有权利'
        },
        layout: {
            skipContent: '跳转到主要内容',
            article: {
                publishedOn: '发布于',
                updatedOn: '更新于',
                minutes: '分钟阅读'
            }
        }
    }
}; 