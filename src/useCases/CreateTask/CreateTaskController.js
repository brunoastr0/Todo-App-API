const { uuid } = require("uuidv4");
const Task = require('../../model/Task')

module.exports = {
    async createTask (req, res){
        let {id, description} = req.body;

        if(!id){
            id = uuid()
        }
        const created_at = new Date()
        const updated_at = new Date()

        const task = await Task.create({id, description, created_at, updated_at})


        return res.json(task)



    }
}