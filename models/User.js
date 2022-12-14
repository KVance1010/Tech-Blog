const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
	checkPassword(loginPw) {
		return bcrypt.compareSync(loginPw, this.password);
	}
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		user_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [8]
			}
		},
	},
	{
		hooks: {
			beforeCreate: async (newUserData) => {
				newUserData.password = await bcrypt.hashSync(newUserData.password, 8);
				return newUserData;
			},
			beforeBulkCreate: async (newUserData) => {
				newUserData.forEach(async (user) => {
					const pass = user.password;					
					user.password = await bcrypt.hashSync(pass, 8);
				});				
			},
		},
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'user',
	}
);

module.exports = User;
