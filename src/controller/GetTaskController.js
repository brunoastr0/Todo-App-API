const { uuid } = require("uuidv4");
const Task = require('../model/Task')

module.exports = {
    async getAllTasks(req, res) {

        try {
            const task = await Task.findAll()
            return res.status(201).json(task)
        }
        catch (err) {
            console.error(err)
        }

    },

    async getOneTask(req, res) {
        try {

            const { id } = req.params
            const task = await Task.findOne({where:{id:id}})
            if(task === null){
                res.status(404).json({ error: `task not found with id ${id}` });
            }
            res.status(200).json(task)
        } catch (err) {
            console.error(err)
        }

    }


}