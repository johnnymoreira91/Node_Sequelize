const User = require('../database/models/User');
const jwt = require('jsonwebtoken');

module.exports = {
  documentation(req, res) {
    res.render('routes')
  },
  // login
  async auth(req, res) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email: email, password: password } })
      const accessToken = jwt.sign({ user: user.id }, process.env.SECRET, { expiresIn: 86400 })

      console.log(accessToken)
      return res.json({
        message: `${user.name} has been authenticated`,
        accessToken
      })
    } catch (error) {
      res.status(401).json({
        message: "User/Password incorrect"
      })
    }
  },
  // fim login
  // inicio register
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
  // fim register
}