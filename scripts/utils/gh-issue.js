const {graphqlWithAuth} = require('./gh')
const {
    owner,
    repoName
} = require('./constants')

async function getIssue(number){
    const { repository } = await graphqlWithAuth(`
        {
            repository(owner: "${owner}", name: "${repoName}") {
                issue(number: ${number}){
                    number
                    title
                    labels(first: 100) {
                        nodes {
                            name
                        }
                    }
                    createdAt
                    body
                }
            }
        }
    `)
    return repository.issue
}

module.exports = {
    getIssue
}