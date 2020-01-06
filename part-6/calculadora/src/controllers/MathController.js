class MathController {
  math(req, res) {
    return res.json(req.body);
  }
}

export default new MathController();
