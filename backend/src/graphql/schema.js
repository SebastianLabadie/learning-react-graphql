const typeDef=`
type Query {
    ping: String!
    messages: [Message!]
  }
  
  type Mutation {
    createMessage(
      title: String!,
      content: String!,
      author: String!
    ): Message
  }
  
  type Message {
    _id: ID!
    title: String!
    content: String!
    author: String!
  }
`

module.exports=typeDef