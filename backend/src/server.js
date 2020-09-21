const {GraphQLServer} = require('graphql-yoga')
const path = require('path')

const resolvers = require('./graphql/resolvers')


 const server = new GraphQLServer({
    typeDefs: require(path.join(__dirname,'graphql/schema')),
    resolvers:resolvers
})

module.exports = server