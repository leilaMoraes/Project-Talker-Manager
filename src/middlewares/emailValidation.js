function emailValidation(req, res, next) {
    const { email } = req.body;
    const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;
    const ERROR_MESSAGE = 400;

      if (!email) {
        return res.status(ERROR_MESSAGE).json({ message: 'O campo "email" é obrigatório' });
      }
      if (!emailRegex.test(email)) {
        return res.status(ERROR_MESSAGE)
        .json({ message: 'O "email" deve ter o formato "email@email.com"' });
      }
      return next();
  }
  
  module.exports = emailValidation;