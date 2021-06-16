const User = require('../database/models/User');
const jwt = require('jsonwebtoken');

module.exports = {
  // login
  async auth(req, res) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email: email, password: password } })
      const accessToken = jwt.sign({ user: user.id }, process.env.SECRET, { expiresIn: 86400 })
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
}