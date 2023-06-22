const path = require('path')
const fse = require('fs-extra')

let acceptLabels = []
try{
    const labelrc = fse.readFileSync(path.join(process.cwd(), '.labelrc'), 'utf-8')
    acceptLabels = labelrc.split(/\r|\n/).filter(Boolean)
}catch(e){
    console.error('acceptLabels load fail.', e)
}

module.exports = {
    token: process.env.GITHUB_TOKEN,
    owner: process.env.GITHUB_OWNER,
    repoName: process.env.GITHUB_REPO.split('/')[1],
    number: process.env.GITHUB_ISSUE_NUMBER,
    action: process.env.GITHUB_EVENT_ACTION,
    labels: process.env.GITHUB_ISSUE_LABELS,
    actionLabel: process.env.GITHUB_ISSUE_LABEL,
    acceptLabels,
}