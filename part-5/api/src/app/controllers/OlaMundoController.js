import User from '../Models/User';

class OlaMundoController {
  olaMundo(req, res) {
    const Users = new User({
      name: 'Michael Douglas',
    });

    return Users.save()
      .then(result => {
        return res.json({
          message: 'Ola, mundo',
          users: result,
        });
      })
      .catch(error => {
        return res.json({
          message: error,
        });
      });
  }
}

export default new OlaMundoController();
