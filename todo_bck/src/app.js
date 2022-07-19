require('dotenv').config();
const cors = require('cors')
const apiErrorHandler = require('./error/api-error-handler')

const express = require("express")
const tasksRouter = require("./routes/tasksRoute")
const app = express()
require('./database')

//middlewares
app.use(express.json())
app.use(cors())
app.use(tasksRouter)
app.use(apiErrorHandler)


module.exports = {app}
