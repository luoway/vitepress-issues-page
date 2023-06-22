import { defineConfig } from 'vitepress'
import sidebar from './sidebar'
console.log('sidebar: ', sidebar)

export default defineConfig({
    title: 'Hello',
    themeConfig: {
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
