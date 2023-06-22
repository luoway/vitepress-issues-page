# vitepress-issues-page
Build static websites using GitHub issues, GitHub Actions, and Vitepress without writing any code or making Git commits and pushes.  
使用GitHub issues + GitHub Actions + Vitepress构建静态网站，无需写代码或操作git提交推送。  

## 用法一
此方法只能fork一次

1. fork[此仓库](https://github.com/luoway/vitepress-issues-page)
2. 在仓库的Actions页面，启用功能
3. 在仓库的Settings - General - Features设置项处，启用Issues功能
4. 在仓库的Settings - Pages - Build and deployment设置项处，将Source配置为Github Actions
5. 在Issues - Labels处新建标签，命名为deploy
6. 新建issue，打上deploy标签后，等待约3分钟，即可在首页看到github-pages入口

## 用法二
此方法可以多次使用，但需要使用git操作完成仓库的初始化。

1. 新建一个仓库，例如`luoway/new-repo`，拉取到本地
2. 执行以下git操作
    ```shell
    git clone https://github.com/luoway/vitepress-issues-page.git
    git remote add origin https://github.com/luoway/new-repo.git
    git push -u origin main
    ```
3. 在仓库的Settings - Pages - Build and deployment设置项处，将Source配置为Github Actions.
4. 在Issues - Labels处新建标签，命名为deploy
5. 新建issue，打上deploy标签后，等待约3分钟，即可在首页看到github-pages入口