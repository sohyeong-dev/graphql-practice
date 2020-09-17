require('dotenv').config();

import { User } from '../../models'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const saltRounds = 10

export const getUsers = () => {
	return User.findAll({}).then(users => users).catch(err => console.error(err))
}

export const getUserById = async id => {
	const user = await User.findByPk(id)
	return user
}

export const findOneByName = async name => {
	const user = await User.findOne({
		name
	})
	return user
}

export const verify = async pwd => {
	return await bcrypt.compareSync(pwd, user.pwd)
}

export const selectUser = async (name, pwd) => {
	const user = await User.findOne({
		where: {
			name,
		}
	})
	if (user) {
		if (await bcrypt.compareSync(pwd, user.pwd)) {
			const token = jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET, {
				algorithm: 'HS256',
			})
			return token
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