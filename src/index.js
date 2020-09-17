import { GraphQLServer } from 'graphql-yoga'
import { sequelize } from '../models'
import resolvers from './graphql/resolvers'

sequelize.sync();

const options = {
  port: 3000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
}

const server = new GraphQLServer({
  typeDefs: "./src/graphql/schema.graphql",
  resolvers,
})
server.start(options, ({ port }) => console.log(`Server is running on learn-express.run.goorm.io:${port}`))