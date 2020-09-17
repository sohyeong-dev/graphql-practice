import { getUsers, getUserById, insertUser, selectUser } from '../db/user'

// 1
const resolvers = {
  Query: {
    user: (_, { id }) => getUserById(id),
    users: () => getUsers(),
	login: (_, { name, pwd }) => selectUser(name, pwd),
  },
  Mutation: {
	signup: (_, { name, pwd }) => insertUser(name, pwd),
  }
}

export default resolvers