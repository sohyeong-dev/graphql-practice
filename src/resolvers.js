import { users, getUserById } from './user'

// 1
let idCount = users.length
const resolvers = {
  Query: {
    user: (_, { id }) => getUserById(id),
    users: () => users,
  },
  Mutation: {
    // 2
    createUser: (_, { name }) => {
       const user = {
        id: `user-${idCount++}`,
        name: name,
      }
      users.push(user)
      return user
    },
	  
	updateUser: (_, { id, name }) => {
		const user = { id: id, name: name }
		for (var i = 0; i < users.length; i++) {
			if (users[i].id === id) {
				users.splice(i, 1, user)
				return user
			}
		}
	},
	  
	deleteUser: (_, { id }) => {
		for (var i = 0; i < users.length; i++) {
			if (users[i].id === id) {
				const user = users[i]
				users.splice(i, 1)
				return user
			}
		}
	}
  },
}

export default resolvers