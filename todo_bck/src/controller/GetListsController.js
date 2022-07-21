

module.exports={
    async getList(req, res, next){

        try{
         
                const task = await Task.findAll(
                    {
                        order: [
    
                            ['createdAt', 'DESC']
                        ]
                    })
                return res.status(201).json(task)

        }catch(error){
            next(error)
        }
    }
}


