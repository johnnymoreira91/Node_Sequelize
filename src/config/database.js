// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('doctor_dev_srv', 'johnny', 'Inicial01', {dialect: 'mysql', host: 'localhost'});

// sequelize.authenticate().then(
//     () => {
//         console.log('Sequelize Connected using MySql')
//     }
// ).catch(
//     (err) => {
//         console.log('Error To Conect', err)
//     }
// )
 
// module.exports = sequelize;

module.exports = {
    dialect: 'mysql', 
    host: 'localhost',
    username: 'johnny',
    password: 'Inicial01',
    database: 'doctor_dev_srv',
    define: {
      timestamp: true
    }
  }