class UserController {
  read(req, res) {
    return res.json({
      message: 'Ola, mundo: read',
    });
  }

  create(req, res) {
    return res.json({
      message: 'Ola, mundo: create',
    });
  }

  update(req, res) {
    return res.json({
      message: 'Ola, mundo: update',
    });
  }

  delete(req, res) {
    return res.json({
      message: 'Ola, mundo: delete',
    });
  }
}

export default new UserController();
