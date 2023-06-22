const path = require('path')
const fse = require('fs-extra')
const targetDir = path.join(__dirname, '../../docs')

module.exports = {
    writeDoc(filePath, issueData){
        return fse.writeFile(filePath, `# ${issueData.title}\n${issueData.body}`)
    },
    async removeDoc(number){
        const files = await fse.readdir(targetDir)
        for(let file of files){
            if(file === number+'.md'){
                await fse.remove(path.join(targetDir, file))
            }
        }
    },
    async cleanDoc(){
        const files = await fse.readdir(targetDir)
        const promises = []
        for(let file of files){
            if(path.extname(file) === '.md' && file !== 'index.md'){
                promises.push(fse.remove(path.join(targetDir, file)))
            }
        }
        await Promise.all(promises)
    },
}
