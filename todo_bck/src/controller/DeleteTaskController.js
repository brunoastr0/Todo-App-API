const Task = require('../model/Task')
const ApiError = require('../error/ApiError')

module.exports = {
    async deleteTask(req, res, next) {

        try {
            const { id } = req.params;

            const taskExists = await Task.findOne({ where: { id: id } })
            if (taskExists === null) {
                next(ApiError.notFound(`Task with id:${id} not found`))
                return;
            }
            await Task.destroy(
                {
                    where: { id: id }
                })
            return res.status(200).send({ success: "Task deleted" })
        }
        catch (err) {
            next(err)
        }

    }


}