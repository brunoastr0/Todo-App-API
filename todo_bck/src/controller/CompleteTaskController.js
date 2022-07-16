const { uuid } = require("uuidv4");
const Task = require('../model/Task')

module.exports = {
    async completeTask(req, res) {

        try {
            const { id } = req.params;
            
            const taskExists = await Task.findOne({ where: { id: id } })
            const completed = taskExists.completed ? false : true
            if (taskExists === null) {
                res.status(404).json({ error: `task not found with id ${id}` });
            }

            const updated_at = new Date()

           await Task.update({ completed: completed, updatedAt: updated_at },
                {
                    returning: true,
                    where: { id: id }
                })


            return res.status(200).json({success: `Task set to completed, task_id:${id}`})
        }
        catch (err) {
            console.error(err)
        }

    }


}