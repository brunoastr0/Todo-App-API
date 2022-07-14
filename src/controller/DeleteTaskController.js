const Task = require('../model/Task')

module.exports = {
    async deleteTask(req, res) {

        try {
            const { id } = req.params;

            const taskExists = await Task.findOne({ where: { id: id } })
            if (taskExists === null) {
                res.status(404).json({ error: `task not found with id ${id}` });
            }
            await Task.destroy(
                {
                    where: { id: id }
                })
            return res.status(201).json({ success: "Task deleted" })
        }
        catch (err) {
            console.error(err)
        }

    }


}