const path = require('path')
const fse = require('fs-extra')
const { getIssues } = require('./utils/gh-issues-list')
const { getIssue } = require('./utils/gh-issue')
const { writeDoc, cleanDoc } = require('./utils/handle-doc')
const Sidebar = require('./utils/handle-sidebar')

const targetDir = path.join(__dirname, '../docs')
const {
    acceptLabels,
} = require('./utils/constants')

!(async function () {
    const p = cleanDoc()
    let issues = []
    
    try{
        issues = await getIssues(acceptLabels)
    }catch(e){
        console.error(e)
        throw new Error('get issues fail.')
    }
    await p

    issues.forEach(async item=>{
        const node = item.node
        const filePath = path.join(targetDir, `${node.number}.md`)
        const p1 = fse.ensureFile(filePath)
        const p2 = getIssue(node.number)
        await p1
        const issueData = await p2
        writeDoc(filePath, issueData)
    })

    console.log('issues number: ', issues.map(item=>item.node.number))
    Sidebar.write(issues, acceptLabels)
})()
