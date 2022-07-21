const List = require('../model/List');

module.exports={
    async getAllLists(req, res, next){

        try{
         
                const list = await List.findAll(
                    {
                        order: [
    
                            ['createdAt', 'DESC']
                        ]
                    })
                return res.status(201).json(list)

        }catch(error){
            next(error)
        }
    }
}


