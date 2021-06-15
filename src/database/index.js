const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('./models/User');
const Addresses = require('./models/Adresses');

const connection = new Sequelize(dbConfig);

connection.authenticate().then(
    () => {
        console.log('Sequelize Connected using MySql')
    }
).catch(
    (err) => {
        console.log('Error To Connect', err)
    }
)

User.init(connection);
Addresses.init(connection);

User.associate(connection.models);
Addresses.associate(connection.models);

module.exports = connection