const Task = require('../model/Task')

module.exports = {
    async editTask(req, res) {

        try {

            const { id } = req.params
            console.log(id)
            let taskExists = await Task.findOne({ where: { id: id } })
            if (taskExists === null) {
                res.status(404).json({ error: `task not found with id ${id}` });
            }

            let { description, completed } = req.body;
            const updated_at = new Date()

            const [rowsCount,task] = await Task
                .update(
                    {
                        description: description,
                        completed: completed,
                        updated_at: updated_at
                    },
                    {
                        returning: true,
                        where: { id: id }
                    })

          
            return res.status(200).json(task)
        }
        catch (err) {
            console.error(err)
        }

    }


}