const { Model, DataTypes } = require("sequelize")

class Task extends Model {

    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            description: DataTypes.STRING,
            completed: DataTypes.BOOLEAN,
            listId: {
                type: DataTypes.STRING,
                references: {
                    model: "List",
                    key: "id"
                },
                created_at: DataTypes.DATE,
                updated_at: DataTypes.DATE
            }


        }, { sequelize, tableName: "task" })
    }

}

module.exports = Task