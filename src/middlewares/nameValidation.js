function nameValidation(req, res, next) {
    const { name } = req.body;
    const ERROR_MESSAGE = 400;

      if (!name) {
        return res.status(ERROR_MESSAGE).json({ message: 'O campo "name" é obrigatório' });
      }
      if (name.length < 3) {
        return res.status(ERROR_MESSAGE)
        .json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
      }
      return next();
  }
  
  module.exports = nameValidation;