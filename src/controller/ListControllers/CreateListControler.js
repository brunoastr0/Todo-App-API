const ApiError = require('../../error/ApiError')
const { v4: uuid } = require("uuid");
const List = require('../../model/List')


module.exports = {
    async createList(req, res, next) {
        try {
            const { title } = req.body;

            if (!title || title.trim().length === 0) {

                next(ApiError.badRequest(`title field is required, should not be empty`))
                return;
            }
            const id = uuid()

            const created_at = new Date()
            const updated_at = new Date()

            const list = await List.create({ id, title, created_at, updated_at })


            return res.status(201).send({ message: "List created succesfully" })
        }
        catch (err) {
            next(err)
        }

    }
}