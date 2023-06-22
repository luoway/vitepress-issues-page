import { defineConfig } from 'vitepress'
import githubLink from './github-link'
import sidebar from './sidebar'
console.log('sidebar: ', sidebar)

export default defineConfig({
    title: 'Vitepress-issues-page',
    themeConfig: {
        socialLinks: [
          { icon: 'github', link: githubLink },
        ],
        outline: 'deep',
        outlineTitle: '导航',
        sidebar,
    },
    locales: {
        root: {
            lang: 'zh-cn',
            label: '简体中文'
        },
    },
})
