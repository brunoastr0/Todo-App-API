const { uuid } = require("uuidv4");
const Task = require('../model/Task')

module.exports = {
    async createTask(req, res) {

        try {


            const { description } = req.body;
            const completed = false;
            
            if(!description){
                res.status(400).json({error:"must contain an description"})
            }
            const id = uuid()
        
            const created_at = new Date()
            const updated_at = new Date()

            const task = await Task.create({ id, description, completed, created_at, updated_at })


            return res.status(201).json(task)
        }
        catch (err) {
            console.error(err)
        }

    }


}