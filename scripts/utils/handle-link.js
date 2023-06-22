const path = require('path')
const fse = require('fs-extra')
const {
    repository
} = require('./constants')
const githubLinkPath = path.join(__dirname, '../../docs/.vitepress/github-link.js')

function genGitUrl(){
    return `https://github.com/${repository}`
}

module.exports = {
    write(){
        fse.ensureFileSync(githubLinkPath)
        fse.writeFileSync(githubLinkPath, `export default '${genGitUrl()}'`)
    }
}