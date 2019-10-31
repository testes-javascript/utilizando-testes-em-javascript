import User from '../Models/User';

class UserController {
  async read(req, res) {
    const { id } = req.body;
    const response = await User.find({ _id: id });

    return res.json(response);
  }

  async create(req, res) {
    const { name } = req.body;

    if (!name)
      return res.status(500).send({ error: 'Nome do usuário não fornecido' });

    const Users = new User({
      name,
    });

    const response = await Users.save();
    return res.json(response);
  }

  async update(req, res) {
    const { name, id } = req.body;
    const response = await User.updateOne({ _id: id }, { name });
    return res.json(response);
  }

  async delete(req, res) {
    const { id } = req.body;
    const response = await User.deleteOne({ _id: id });
    return res.json(response);
  }
}

export default new UserController();
