export default {
    navigation: {
        home: 'ホーム',
        blog: 'ブログ',
        projects: 'プロジェクト',
        tags: 'タグ',
        about: '私について',
        contact: '連絡',
        theme: 'テーマ'
    },
    pages: {
        home: {
            viewAllPosts: 'すべての記事を見る',
            writing: '記事',
            projects: 'プロジェクト',
            viewAllProjects: 'すべてのプロジェクトを見る'
        },
        tags: {
            title: 'すべてのタグ',
            description: '記事のタグをブラウズして、興味のあるコンテンツを見つけましょう。',
            viewArchive: 'タグアーカイブを見る',
            postCount: {
                one: '記事',
                other: '記事'
            },
            tagPage: {
                title: 'タグ付き記事',
                description: 'タグ付けされた記事のコレクションを探索する'
            }
        },
        blog: {
            title: 'ブログ',
            description: '私の記事とインサイトのコレクションを探索する',
            updated: '更新日',
            share: 'シェア',
            copyLink: 'リンクをコピー',
            copied: 'コピーしました',
            prevPost: '前の記事',
            nextPost: '次の記事'
        },
        error: {
            title: '404 見つかりません',
            description: '404エラー — このページは見つかりませんでした',
            heading: 'ページが見つかりません',
            backHome: 'ホームページに戻る'
        },
        projects: {
            title: 'プロジェクト',
            description: '私の情熱と専門知識を紹介する多様なポートフォリオを探索する',
            viewNext: '次を見る',
            prevProject: '前のプロジェクト',
            nextProject: '次のプロジェクト'
        }
    },
    components: {
        pagination: {
            prev: '前へ',
            next: '次へ',
            page: 'ページ',
            current: '現在のページ',
            of: '/'
        },
        post: {
            readMore: '続きを読む',
            updated: '更新日'
        },
        project: {
            viewProject: 'プロジェクトを見る'
        },
        date: {
            format: {
                long: 'YYYY年MM月DD日',
                short: 'MM月DD日'
            }
        },
        subscribe: {
            title: 'ブログを購読する',
            description: '週に1回の更新。最新の記事がすべて直接あなたの受信トレイに届きます。',
            placeholder: 'メールアドレスを入力',
            button: '購読する',
            success: '購読に成功しました！',
            error: '購読に失敗しました。後でもう一度お試しください。'
        },
        nav: {
            menuLabel: 'メニューを開く',
            closeMenuLabel: 'メニューを閉じる',
            themeToggle: 'テーマ切り替え'
        },
        footer: {
            copyright: '著作権',
            poweredBy: '{name} によって駆動',
            allRightsReserved: '全著作権所有'
        },
        layout: {
            skipContent: 'メインコンテンツにスキップ',
            article: {
                publishedOn: '公開日',
                updatedOn: '更新日',
                minutes: '分で読めます'
            }
        }
    }
}; 