const {Router} = require("express")
const createTaskController = require('./controller/CreateTaskController')
const editTaskController = require('./controller/EditTaskController')

const router = Router()

router.post('/api/task', createTaskController.createTask)
router.put('/api/task/:id', editTaskController.editTask)


module.exports = router