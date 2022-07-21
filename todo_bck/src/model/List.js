const { Model, DataTypes } = require('sequelize')

class List extends Model {

    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            title: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE


        }, { sequelize, tableName: "list" }
        )
    }
}

module.exports = List