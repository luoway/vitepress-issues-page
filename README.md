# vitepress-issues-page

[English docs](https://fecat.win/vitepress-issues-page/1.html)

使用GitHub issues + GitHub Actions + Vitepress构建静态网站，无需写代码或操作git提交推送。  


## 用法一
此方法只能fork一次

1. fork[此仓库](https://github.com/luoway/vitepress-issues-page)
2. 在仓库的Actions页面，启用功能
3. 在仓库的Settings - General - Features设置项处，启用Issues功能
4. 在仓库的Settings - Pages - Build and deployment设置项处，将Source配置为Github Actions
5. 在Issues - Labels处新建标签，命名为deploy
6. 新建issue，打上deploy标签后，等待约3分钟，即可在仓库首页看到github-pages入口

## 用法二
此方法可以多次使用，但需要使用shell操作完成仓库的初始化。

1. 新建一个仓库，例如`luoway/new-repo`，拉取到本地
2. 执行以下shell操作
    ```shell
    # dir: new-repo/
    git clone https://github.com/luoway/vitepress-issues-page.git
    mv ./vitepress-issues-page/.* ./vitepress-issues-page/* .
    rm -rf ./vitepress-issues-page
    git add -A
    git commit -m "init"
    git push
    ```
3. 在仓库的Settings - Pages - Build and deployment设置项处，将Source配置为Github Actions.
4. 在Issues - Labels处新建标签，命名为deploy
5. 新建issue，打上deploy标签后，等待约3分钟，即可在仓库首页看到github-pages入口

## 快捷访问github pages
点击仓库首页右侧About小齿轮，勾选`Use your GitHub Pages website`，点击`Save changes`，即可在About下显示快速访问链接

## 页面配置

点击以下链接，进行手动修改

- [顶部标题](./docs/.vitepress/config.js#L7)
- [首页内容](./docs/index.md)
- [侧边栏分组](./.labelrc) 配置规则：每行一个label。多个label展示为多组侧边栏
