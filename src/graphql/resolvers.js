import { getUsers, getUserById } from '../db/user'

// 1
const resolvers = {
  Query: {
    user: (_, { id }) => getUserById(id),
    users: () => getUsers(),
  },
}

export default resolvers