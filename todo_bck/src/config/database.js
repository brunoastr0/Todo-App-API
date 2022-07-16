const path = require('path')
require('dotenv').config();
const {DB_HOST, DB_PASSWORD, DB_USER, DATABASE} = process.env;
module.exports = {
    dialect: 'postgres',
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DATABASE,
    logging:false,
    define: {
        timestamps: true,
        underscored: true,
    } 
};