class MathController {
  math(req, res) {
    const { dados, expressao } = req.body;

    let value = 0;

    switch (expressao) {
      case 'soma':
        value = dados.reduce((a, b) => parseInt(a) + parseInt(b));
        break;

      case 'subtracao':
        value = dados.reduce((a, b) => parseInt(a) - parseInt(b));
        break;

      case 'divisao':
        value = dados.reduce((a, b) => parseInt(a) / parseInt(b));
        break;

      case 'multiplicacao':
        value = dados.reduce((a, b) => parseInt(a) * parseInt(b));
        break;

      default:
        value = false;
        break;
    }

    return res.json({ resultado: value });
  }
}

export default new MathController();
