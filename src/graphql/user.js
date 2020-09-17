export let users = [{
	id: 'user-0',
	name: 'shlee'
}]

export const getUserById = id => {
	const result = users.filter(user => user.id === id)
	return result[0]
}