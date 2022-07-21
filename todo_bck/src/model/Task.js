const { Model, DataTypes } = require("sequelize")

class Task extends Model {

    static init(sequelize) {
        super.init({
            id: {
                type:DataTypes.STRING,
                primaryKey: true
            },
            description: DataTypes.STRING,
            completed: DataTypes.BOOLEAN,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
            list_id: {
                type: DataTypes.STRING,
                
            }

        }, { sequelize, tableName: "task" })
    }

}

module.exports = Task