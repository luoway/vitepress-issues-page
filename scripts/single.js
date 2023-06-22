const path = require('path')
const fse = require('fs-extra')
const { getIssue } = require('./utils/gh-issue')
const { writeDoc, removeDoc } = require('./utils/handle-doc')
const Sidebar = require('./utils/handle-sidebar')

const targetDir = path.join(__dirname, '../docs')
const {
    number,
    labels,
    acceptLabels,
} = require('./utils/constants')

!(async function () {
    const labelList = labels ? labels.split(',') : []
    const renderLabels = labelList.filter(label=>acceptLabels.includes(label))

    if(renderLabels.length === 0){
        //remove
        removeDoc(number)
        Sidebar.remove(number)
        return
    }
    
    //add or update file
    const filePath = path.join(targetDir, `${number}.md`)
    const p1 = fse.ensureFile(filePath)
    const p2 = getIssue(number)
    await p1

    let issueData
    try {
        issueData = await p2
    }catch(e){
        console.error(e)
        throw new Error('get issue fail.')
    }

    if(issueData) {
        writeDoc(filePath, issueData)
        Sidebar.update(issueData, renderLabels, acceptLabels)
    }
})()
