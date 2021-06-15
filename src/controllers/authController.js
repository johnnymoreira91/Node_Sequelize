const User = require('../database/models/User');

module.exports = {
  async auth(req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({ where: { email: email, password: password } })
      return res.json({
        message: `${user.name} has been authenticated`
      })
    } catch (error) {
      res.status(401).json({
        message: "User/Password incorrect"
      })
    }
  },

}