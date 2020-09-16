import { GraphQLServer } from 'graphql-yoga'
import resolvers from './src/resolvers'

const options = {
  port: 3000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
}

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
})
server.start(options, ({ port }) => console.log(`Server is running on learn-express.run.goorm.io:${port}`))