const {
    graphql
} = require('@octokit/graphql')
const {
    token
} = require('./constants')

module.exports = {
    graphqlWithAuth: graphql.defaults({
        headers: {
            authorization: `token ${token}`,
        },
    })
}