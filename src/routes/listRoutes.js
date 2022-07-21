const { Router } = require("express")
const createListController = require("../controller/CreateListControler")
const getListController = require('../controller/GetListsController')
const list = Router()

list.post('/api/list', createListController.createList)
list.get('/api/list', getListController.getAllLists)


module.exports = list