const Task = require('../model/Task')
const ApiError = require('../error/ApiError')

module.exports = {
    async editTask(req, res, next) {

        try {

            const { id } = req.params
            const taskExists = await Task.findOne({ where: { id: id } })
            if (taskExists === null) {
                next(ApiError.notFound(`Did not find any task with id: ${id}`))
                return;            }

            const { description } = req.body;
            if (!description || description.trim().length === 0) {
                next(ApiError.badRequest(`description field is required, should not be empty`))
                return;
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


            return res.status(200).send({ success:"task edited"})
        }
        catch (err) {
           next(err)
        }

    }


}