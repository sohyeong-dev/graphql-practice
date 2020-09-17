import { User } from '../../models'
import bcrypt from 'bcryptjs'

const saltRounds = 10

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

export const insertUser = async (name, pwd) => {
	const salt = bcrypt.genSaltSync(saltRounds)
	const hashedPassword = await bcrypt.hashSync(pwd, salt)
	const user = await User.create({
		name,
		pwd: hashedPassword,
	})
	return user
}