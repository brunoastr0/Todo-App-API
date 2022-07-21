const { Router } = require("express")
const createListController = require("../controller/CreateListControler")
const list = Router()

list.post('/api/list', createListController.createList)

module.exports = list