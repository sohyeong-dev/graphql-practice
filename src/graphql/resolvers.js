import { getUsers, getUserById, selectUser } from '../db/user'

// 1
const resolvers = {
  Query: {
    user: (_, { id }) => getUserById(id),
    users: () => getUsers(),
	login: (_, { name, pwd }) => selectUser(name, pwd),
  }
}

export default resolvers