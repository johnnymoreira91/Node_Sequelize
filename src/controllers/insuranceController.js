const Insurance = require('../database/models/Insurance');
const User = require('../database/models/User');

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;
    try {
      const user = await User.findByPk(user_id, {
        include: { association: 'insurance' }
      });
      return res.status(200).json(user.insurance)
    } catch (error) {
      return res.status(400).json({ error: 'Error do find All Insurances!' })
    }
  },
  // final index
  // start store
  async store(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    try {
      const user = await User.findByPk(user_id);
      if (!user) {
        return res.status(400).json({ error: 'User Not Found!' })
      }
      const [insurance] = await Insurance.findOrCreate({
        where: { name }
      });
      await user.addInsurance(insurance)
      return res.status(200).json(insurance)
    } catch (error) {
      return res.status(400).json({ error: 'Erro to Create a new Insurance!' })
    }
  },
  // final store
  // start delete
  async delete(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;
    try {
      const user = await User.findByPk(user_id);
      if (!user) {
        return res.status(400).json({ error: 'User Not Found!' })
      }
      const insurance = await Insurance.findOne({
        where: { name }
      })
      await user.removeInsurance(insurance)
      return res.status(200).json({ message: 'Insurance has been removed with Succesfull!' })
    } catch (error) {
      return res.status(400).json({ error: 'Error to delete this Insurance !' })
    }
  },
  // final delete
}