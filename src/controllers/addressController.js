const Addresses = require('../database/models/Adresses');
const User = require('../database/models/User');

module.exports = {
  async getAddress(req,res){
    const { user_id } = req.params;
    const user = await User.findByPk(user_id, {
      include: { association: 'addresses' }
    });

    return res.status(200).json(user)

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

    return res.status(200).json(user)

    const address = await Addresses.create({
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