require('dotenv').config();

const express = require("express")
const todoRouter = require("./routes/todo")
const app = express()
require('./database')

app.use(express.json())
app.use(todoRouter)

module.exports = {app}
