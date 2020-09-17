import { getUsers, getUserById, insertUser } from '../db/user'

// 1
const resolvers = {
  Query: {
    user: (_, { id }) => getUserById(id),
    users: () => getUsers(),
  },
  Mutation: {
	signup: (_, { name, pwd }) => insertUser(name, pwd),
  }
}

export default resolvers