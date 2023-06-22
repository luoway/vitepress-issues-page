const path = require('path')
const fse = require('fs-extra')

const githubLinkPath = path.join(__dirname, '../../docs/.vitepress/github-link.js')

function genGitUrl(repository){
    return `https://github.com/${repository}`
}

function getGitUrl(){
    const file = path.join(__dirname, '../../.git/config')
    const fileContent = fse.readFileSync(file, 'utf-8')
    const index = fileContent.search(`[remote "origin"]`)
    if(index > -1){
        const matchSSH = fileContent.match(/url\s=\sgit@github\.com:(.+)\.git/)
        const matchHTTP = fileContent.match(/url\s=\shttps:\/\/github\.com\/(.+)\.git/)

        if(matchSSH){
            return genGitUrl(matchSSH[1])
        }else if(matchHTTP){
            return genGitUrl(matchHTTP[1])
        }
    }
}

module.exports = {
    write(){
        fse.ensureFileSync(githubLinkPath)
        fse.writeFileSync(githubLinkPath, `export default '${getGitUrl()}'`)
    }
}