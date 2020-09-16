import { users, getUserById } from './user'

// 1
let idCount = users.length
const resolvers = {
  Query: {
    user: (parent, args) => getUserById(args.id),
    users: () => users,
  },
  Mutation: {
    // 2
    createUser: (parent, args) => {
       const user = {
        id: `user-${idCount++}`,
        name: args.name,
      }
      users.push(user)
      return user
    },
	  
	updateUser: (parent, args) => {
		const user = { id: args.id, name: args.name }
		for (var i = 0; i < users.length; i++) {
			if (users[i].id === args.id) {
				users.splice(i, 1, user)
				return user
			}
		}
	},
	  
	deleteUser: (parent, args) => {
		for (var i = 0; i < users.length; i++) {
			if (users[i].id === args.id) {
				const user = users[i]
				users.splice(i, 1)
				return user
			}
		}
	}
  },
}

export default resolvers