const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('./models/User');

const connection = new Sequelize(dbConfig);

connection.authenticate().then(
    () => {
        console.log('Sequelize Connected using MySql')
    }
).catch(
    (err) => {
        console.log('Error To Conect', err)
    }
)

User.init(connection);

module.exports = connection