const { v4: uuid } = require("uuid");
const Task = require('../model/Task')
const ApiError = require('../error/ApiError');
const List = require("../model/List");

module.exports = {
    async createTask(req, res, next) {

        try {
            const { description, listId } = req.body;
            const completed = false;

            if (!description || description.trim().length === 0) {

                next(ApiError.badRequest(`description field is required, should not be empty`))
                return;
            }
            if (!listId || listId.trim().length === 0) {

                next(ApiError.badRequest(`id of the list, should not be empty`))
                return;
            }
            const list = await List.findOne({ where: { id: listId } })
            if (!list) {
                next(ApiError.notFound(`List with id: ${listId} does not exists`))
                return;
            }
            const id = uuid()
            const created_at = new Date()
            const updated_at = new Date()

            const task = await Task.create({ id, description, completed, listId: listId, created_at, updated_at })


            return res.status(201).send({ message: "Task created succesfully" })
        }
        catch (err) {
            next(err)
        }

    }


}