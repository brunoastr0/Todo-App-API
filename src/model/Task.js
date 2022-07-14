const { Model, DataTypes } = require("sequelize")

class Task extends Model {

    static init(sequelize) {
        super.init({
            id: {
                type:DataTypes.STRING,
                primaryKey: true
            },
            description: DataTypes.STRING,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,

        }, { sequelize, tableName: "task" })
    }

}

module.exports = Task