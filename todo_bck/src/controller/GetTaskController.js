const { uuid } = require("uuidv4");
const Task = require('../model/Task')
const ApiError = require('../error/ApiError')


module.exports = {
    async getAllTasks(req, res) {

        try {
            const task = await Task.findAll(
                {
                    order: [

                        ['createdAt', 'DESC']
                    ]
                })
            return res.status(201).json(task)
        }
        catch (err) {
            next(err)
        }

    },

    async getOneTask(req, res, next) {
        try {

            const { id } = req.params
            const task = await Task.findOne({ where: { id: id } })
            if (task === null) {
                next(ApiError.notFound(`Did not find any task with id: ${id}`))
                return;             }
            res.status(200).json(task)
        } catch (err) {
            next(err)
        }

    }


}