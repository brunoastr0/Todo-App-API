const {Router} = require("express")
const createTaskController = require('../controller/CreateTaskController')
const editTaskController = require('../controller/EditTaskController')
const deleteTaskController = require('../controller/DeleteTaskController')
const getTaskController = require('../controller/GetTaskController')



const todo = Router()

todo.post('/api/task', createTaskController.createTask)
todo.put('/api/task/:id', editTaskController.editTask)
todo.delete('/api/task/:id', deleteTaskController.deleteTask)
todo.get('/api/task',getTaskController.getAllTasks)
todo.get('/api/task/:id',getTaskController.getOneTask)




module.exports = todo