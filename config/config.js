require('dotenv').config();

module.exports = {
	// 개발용
	development: {
		username: "root",
		password: process.env.SEQUELIZE_PASSWORD,
		database: "graphqlYoga",
		host: "127.0.0.1",
		dialect: "mysql",
		operatorsAliases: "false",
	},
	// 배포 환경
	production: {
		username: "root",
		password: process.env.SEQUELIZE_PASSWORD,
		database: "graphqlYoga",
		host: "127.0.0.1",
		dialect: "mysql",
		operatorsAliases: "false",
		// 쿼리 명령어를 숨긴다
		logging: false,
	},
};