import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schemas/searchSchema'

const app = express()

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))

app.listen(4000)
console.log('Running a GraphQL API server at localhost:4000/graphql')