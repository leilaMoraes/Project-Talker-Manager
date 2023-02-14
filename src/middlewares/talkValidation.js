function validateTalk(req, res, next) {
    const { talk } = req.body;
    const ERROR_MESSAGE = 400;
  
    if (!talk) {
      return res.status(ERROR_MESSAGE).json({ message: 'O campo "talk" é obrigatório' });
    }
    next();
}
  
  module.exports = validateTalk;