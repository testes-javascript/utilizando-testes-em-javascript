class OlaMundoController {
  olaMundo(req, res) {
    return res.json({
      message: 'Ola, mundo',
    });
  }
}

export default new OlaMundoController();
