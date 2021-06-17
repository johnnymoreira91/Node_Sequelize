const Histories = require('../database/models/Histories');
const User = require('../database/models/User');

module.exports = {

  async index(req, res) {
    const { user_id } = req.params;
    try {
      const user = await User.findByPk(user_id, {
        include: { 
          association: 'histories',
          attributes: ['history']
        }
      });

      return res.status(200).json(user)

    } catch (error) {
      
    }
  },

  async store(req, res) {
    const { user_id } = req.params;
    const { history } = req.body;
    try {
      const user = await User.findByPk(user_id);

      if (!user) {
        return res.status(400).json({ Error: "User Not Found!" })
      }

      const histories = await Histories.create({
        history,
        user_id
      })
      return res.status(200).json(histories)

    } catch (error) {
      return res.status(400).json({ error: 'Erro to Create a new History!' })
    }
  },
}