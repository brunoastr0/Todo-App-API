require('dotenv').config();

const express = require("express")
const router = require("./routes")
const app = express()
require('./database')

app.use(express.json())
app.use(router)

module.exports = {app}
