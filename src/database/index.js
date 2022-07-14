const Sequelize = require("sequelize")
const dbConfig = require("../config/database")

const Task = require("../model/Task")

const connection = new Sequelize(dbConfig)

Task.init(connection)

module.exports = connection