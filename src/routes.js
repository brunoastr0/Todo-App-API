const {Router} = require("express")
const createTaskController = require('./useCases/CreateTask/CreateTaskController')
const router = Router()

router.post('/api/task', createTaskController.createTask)

module.exports = router