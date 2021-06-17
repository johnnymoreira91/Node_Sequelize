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
      res.status(401).json({ message: 'Error to create a new User' })
    }
  },

  async delete(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;
    try {
      const find = await User.findByPk(user_id);
      if (!find) {
        return res.status(400).json({ error: 'User Not Found!' })
      }
      const user = await User.destroy({
        where: { name }
      })
      return res.status(200).json({ message: `${name} has been removed with Succesfull!` })
    } catch (error) {
      return res.status(400).json({ error: 'Error to delete this User !' })
    }
  },

}