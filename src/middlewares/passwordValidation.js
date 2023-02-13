function passwordValidation(req, res, next) {
    const { password } = req.body;
    const ERROR_MESSAGE = 400;

      if (!password) {
        return res.status(ERROR_MESSAGE).json({ message: 'O campo "password" é obrigatório' });
      }
      if (password.length < 6) {
        return res.status(ERROR_MESSAGE)
        .json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
      }
      return next();
  }
  
  module.exports = passwordValidation;