import { User } from '../../models'
import bcrypt from 'bcryptjs'

export const getUsers = () => {
	return User.findAll({}).then(users => users).catch(err => console.error(err))
}

export const getUserById = async id => {
	const user = await User.findByPk(id)
	return user
}

export const selectUser = async (name, pwd) => {
	const user = await User.findOne({
		where: {
			name,
		}
	})
	if (user) {
		if (await bcrypt.compareSync(pwd, user.pwd)) {
			return user
		}
		throw new Error('Incorrect password.')
	}
	throw new Error('No Such User exists.')
}