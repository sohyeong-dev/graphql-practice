module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    pwd: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  }, {
    timestamps: true,
  });
};