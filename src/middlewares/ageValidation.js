function ageValidation(req, res, next) {
    const { age } = req.body;
    const ERROR_MESSAGE = 400;
      if (!age) {
        return res.status(ERROR_MESSAGE).json({ message: 'O campo "age" é obrigatório' });
      }
      if (typeof age !== 'number') {
        return res.status(ERROR_MESSAGE)
        .json({ message: 'O campo "age" deve ser do tipo "number"' });
      }
      if (age % 1 !== 0) {
        return res.status(ERROR_MESSAGE)
        .json({ message: 'O campo "age" deve ser um "number" do tipo inteiro' });
      }
      if (age < 18) {
        return res.status(ERROR_MESSAGE)
        .json({ message: 'A pessoa palestrante deve ser maior de idade' });
      }
      return next();
  }
  
  module.exports = ageValidation;