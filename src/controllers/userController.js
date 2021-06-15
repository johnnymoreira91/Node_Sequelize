const User = require('../database/models/User');

module.exports = {

  async index(req, res) {
    const user = await User.findAll()
    res.status(200).json(user)
  },

  async store(req, res) {
    try {
      const { name, email, password } = req.body
      const user = await User.create({
        name,
        email,
        password
      })
      user.password = undefined
      res.status(200).json(user)
    } catch (error) {
      res.status(401).json({message: 'Error to create a new User'})
    }
  },

}