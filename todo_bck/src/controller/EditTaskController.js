const Task = require('../model/Task')

module.exports = {
    async editTask(req, res) {

        try {

            const { id } = req.params
            const taskExists = await Task.findOne({ where: { id: id } })
            if (taskExists === null) {
                res.status(404).json({ error: `task not found with id ${id}` });
            }

            const { description } = req.body;
            if (!description) {
                res.status(400).json({ error: "must contain an description" })

            }
            const updated_at = new Date()

            const [rowsCount, task] = await Task
                .update(
                    {
                        description: description,
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