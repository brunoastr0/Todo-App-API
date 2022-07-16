require('dotenv').config();
const cors = require('cors')

const express = require("express")
const tasksRouter = require("./routes/tasksRoute")
const app = express()
require('./database')

app.use(express.json())
app.use(cors())
app.use(tasksRouter)


module.exports = {app}
