function tokenValidation(req, res, next) {
  const { authorization } = req.headers;
  const ERROR = 401;
    if (!authorization) {
      return res.status(ERROR).json({ message: 'Token não encontrado' });
    }
    if (authorization.length !== 16 || typeof authorization !== 'string') {
      return res.status(ERROR).json({ message: 'Token inválido' });
    }
    return next();
}

module.exports = tokenValidation;