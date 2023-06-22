const {graphqlWithAuth} = require('./gh')

const {
    owner,
    repoName,
    acceptLabels,
} = require('./constants')

const pageSize = 100 // github api limit
const total = []

async function getIssues(labels){
    const last = total.length && total[total.length - 1]
    const { repository } = await graphqlWithAuth(`
        {
            repository(owner: "${owner}", name: "${repoName}") {
                issues(
                    orderBy: {
                        field: CREATED_AT, 
                        direction: ASC
                    }, 
                    labels: ${acceptLabels ? `${JSON.stringify(acceptLabels)}` : null}, 
                    first: ${pageSize},
                    after: ${last ? `"${last.cursor}"` : null}
                ) {
                    edges {
                        cursor
                        node {
                            number
                            title
                            labels(first: 100) {
                                nodes {
                                    name
                                }
                            }
                            createdAt
                        }
                    }
                }
            }
        }
    `)

    if(repository?.issues?.edges?.length) {
        total.push(...repository.issues.edges)
        return await getIssues(labels)
    } else {
        return total
    }
}

module.exports = {
    getIssues
}