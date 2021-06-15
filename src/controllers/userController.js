const User = require('../database/models/User');

module.exports = {

  async index(req,res) {
    const user = await User.findAll()
    res.status(200).json(user)
  },

  async store(req,res) {
    const { name, email, password } = req.body

    const user = await User.create({
      name,
      email,
      password
    })
    res.status(200).json(user)
  },

}