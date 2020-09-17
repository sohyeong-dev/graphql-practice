import { User } from '../../models'
import bcrypt from 'bcryptjs'

export const getUsers = () => {
	return User.findAll({}).then(users => users).catch(err => console.error(err))
}

export const getUserById = async id => {
	const user = await User.findByPk(id)
	return user
}