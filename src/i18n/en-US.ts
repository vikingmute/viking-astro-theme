export default {
    navigation: {
        home: 'Home',
        blog: 'Blog',
        projects: 'Projects',
        tags: 'Tags',
        about: 'About',
        contact: 'Contact',
        theme: 'Theme'
    },
    pages: {
        home: {
            viewAllPosts: 'View All Posts',
            writing: 'Writing',
            projects: 'Projects',
            viewAllProjects: 'View All Projects'
        },
        tags: {
            title: 'All Tags',
            description: 'Explore tag directory for easy navigation and discovery.',
            viewArchive: 'View Tag Archive',
            postCount: {
                one: 'post',
                other: 'posts'
            },
            tagPage: {
                title: 'Posts Tagged',
                description: 'Explore a curated collection of blog posts under'
            }
        },
        blog: {
            title: 'Blog',
            description: 'Explore my collection of articles and insights',
            updated: 'Updated on',
            share: 'Share',
            copyLink: 'Copy link',
            copied: 'Copied',
            prevPost: 'Previous Post',
            nextPost: 'Next Post'
        },
        error: {
            title: '404 Not Found',
            description: '404 Error — this page was not found',
            heading: 'Page Not Found',
            backHome: 'Back to Homepage'
        },
        projects: {
            title: 'Projects',
            description: 'Explore a diverse portfolio showcasing my passion and expertise',
            viewNext: 'View Next',
            prevProject: 'Previous Project',
            nextProject: 'Next Project'
        }
    },
    components: {
        pagination: {
            prev: 'Previous',
            next: 'Next',
            page: 'Page',
            current: 'Current page',
            of: 'of'
        },
        post: {
            readMore: 'Read More',
            updated: 'Updated on'
        },
        project: {
            viewProject: 'View Project'
        },
        date: {
            format: {
                long: 'MMMM D, YYYY',
                short: 'MMM D'
            }
        },
        subscribe: {
            title: 'Subscribe to My Blog',
            description: 'One update per week. All the latest posts directly in your inbox.',
            placeholder: 'Enter your email',
            button: 'Subscribe',
            success: 'Successfully subscribed!',
            error: 'Subscription failed, please try again later.'
        },
        nav: {
            menuLabel: 'Open Menu',
            closeMenuLabel: 'Close Menu',
            themeToggle: 'Toggle theme'
        },
        footer: {
            copyright: 'Copyright',
            poweredBy: 'Powered by {name}',
            allRightsReserved: 'All rights reserved'
        },
        layout: {
            skipContent: 'Skip to main content',
            article: {
                publishedOn: 'Published on',
                updatedOn: 'Updated on',
                minutes: 'min read'
            }
        }
    }
}; 