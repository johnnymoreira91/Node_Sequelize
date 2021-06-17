const { Op } = require('sequelize');
const User = require('../database/models/User');
module.exports = {
  async show(req, res) {
    try {

      const users = await User.findAll({
        attributes: ['id','name', 'email'],
        // where: {
        //   email: {
        //     [Op.like]: '%@hotmail.com'
        //   }
        // },
        include: [
          {
            association: 'addresses',
            attributes: ['street', 'number'],
            // where: { street: 'Dr José Pereira Gomes' }
          },
          {
            association: 'insurance',
            attributes: ['name'],
            through: {
              attributes:[]
            }
          },
          { 
            association: 'histories',
            attributes: ['history']
          },
        ]
      })

      return res.status(200).json(users)
    } catch (error) {
      console.log(error)
    }
  },
};