const Sequelize = require('sequelize')

const sequelize = new Sequelize('database_RDN','root', '',{
    host: "localhost",
    dialect: "mysql"
})

module.exports = sequelize