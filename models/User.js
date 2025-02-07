const { DataTypes, Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_URL,
  {
    dialect: "postgres",
    logging: false,
  }
);

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { sequelize, User };
