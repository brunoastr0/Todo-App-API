const Sequelize = require("sequelize")
const dbConfig = require("../config/database")
const List = require("../model/List")

const Task = require("../model/Task")

const connection = new Sequelize(dbConfig)

List.init(connection)
Task.init(connection)

// List.hasMany(Task)
// Task.belongsTo(List)

module.exports = connection