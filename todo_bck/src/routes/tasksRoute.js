const {Router} = require("express")
const createTaskController = require('../controller/CreateTaskController')
const editTaskController = require('../controller/EditTaskController')
const deleteTaskController = require('../controller/DeleteTaskController')
const getTaskController = require('../controller/GetTaskController')
const completeTaskController = require('../controller/CompleteTaskController')



const task = Router()

task.post('/api/task', createTaskController.createTask)
task.put('/api/task/:id', editTaskController.editTask)
task.delete('/api/task/:id', deleteTaskController.deleteTask)
task.get('/api/task',getTaskController.getAllTasks)
task.get('/api/task/:id',getTaskController.getOneTask)
task.patch('/api/task/complete/:id', completeTaskController.completeTask)





module.exports = task