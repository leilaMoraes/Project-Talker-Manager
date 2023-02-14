function rateValidation(req, res, next) {
    const { talk } = req.body;
    const { rate } = talk;
    const ERROR_MESSAGE = 400;

    if (rate === undefined) {
        return res.status(ERROR_MESSAGE).json({ message: 'O campo "rate" é obrigatório' }); 
    }
    if (rate % 1 !== 0 || rate < 1 || rate > 5) {
        return res.status(ERROR_MESSAGE)
        .json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }
    return next();
}

module.exports = rateValidation;