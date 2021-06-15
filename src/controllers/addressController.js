const Address = require('../database/models/Adresses');
const User = require('../database/models/User');

module.exports = {
  async getAddress(req,res){
    const { user_id } = req.params;
    const user = await User.findByPk(user_id, {
      include: { association: 'addresses' }
    })
    if (!user) {
      return res.status(400).json({ error: 'User Not Found!' })
    }
    return res.status(200).json(user)
  },

  async allAddress(req,res) {
    const user = await User.findAll({
      include: { association: 'addresses' }
    })
    res.status(200).json(user)
  },

  async store(req,res) {
    const { user_id } = req.params;
    const {zipcode, street, number, block, apartment} = req.body;

    const user = await User.findByPk(user_id, {
      include: { association: 'addresses' }
    })
    if (!user) {
      return res.status(400).json({ error: 'User Not Found!' })
    }
    const address = await Address.create({
      zipcode,
      street,
      number,
      block,
      apartment,
      user_id
    })
    return res.status(200).json(address);
  },
};