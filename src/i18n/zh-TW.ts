export default {
    navigation: {
        home: '首頁',
        blog: '部落格',
        projects: '作品',
        tags: '標籤',
        about: '關於',
        contact: '聯絡',
        theme: '主題'
    },
    pages: {
        home: {
            viewAllPosts: '查看全部文章',
            writing: '文章',
            projects: '作品',
            viewAllProjects: '查看全部作品'
        },
        tags: {
            title: '所有標籤',
            description: '瀏覽所有文章標籤，找到您感興趣的內容。',
            viewArchive: '查看標籤歸檔',
            postCount: {
                one: '篇文章',
                other: '篇文章'
            },
            tagPage: {
                title: '標籤文章',
                description: '瀏覽標籤下的精選文章集合'
            }
        },
        blog: {
            title: '部落格',
            description: '探索我的文章和見解集合',
            updated: '更新於',
            share: '分享',
            copyLink: '複製連結',
            copied: '已複製',
            prevPost: '上一篇',
            nextPost: '下一篇'
        },
        error: {
            title: '404 未找到',
            description: '404 錯誤 — 頁面未找到',
            heading: '頁面未找到',
            backHome: '返回首頁'
        },
        projects: {
            title: '作品',
            description: '探索展示我的熱情和專業知識的作品集',
            viewNext: '查看下一個',
            prevProject: '上一個專案',
            nextProject: '下一個專案'
        }
    },
    components: {
        pagination: {
            prev: '上一頁',
            next: '下一頁',
            page: '頁',
            current: '當前頁',
            of: '共'
        },
        post: {
            readMore: '閱讀更多',
            updated: '更新於'
        },
        project: {
            viewProject: '查看專案'
        },
        date: {
            format: {
                long: 'YYYY年MM月DD日',
                short: 'MM月DD日'
            }
        },
        subscribe: {
            title: '訂閱我的部落格',
            description: '每週更新一次，所有最新文章直接發送到您的收件匣。',
            placeholder: '輸入您的郵箱',
            button: '訂閱',
            success: '訂閱成功！',
            error: '訂閱失敗，請稍後重試。'
        },
        nav: {
            menuLabel: '打開選單',
            closeMenuLabel: '關閉選單',
            themeToggle: '切換主題'
        },
        footer: {
            copyright: '版權所有',
            poweredBy: '由 {name} 驅動',
            allRightsReserved: '保留所有權利'
        },
        layout: {
            skipContent: '跳轉到主要內容',
            article: {
                publishedOn: '發布於',
                updatedOn: '更新於',
                minutes: '分鐘閱讀'
            }
        }
    }
}; 