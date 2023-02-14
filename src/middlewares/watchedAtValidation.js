function watchedAtValidation(req, res, next) {
    const { talk } = req.body;
    const { watchedAt } = talk;
    const ERROR_MESSAGE = 400;
    const dateRegex = /(0?[1-9]|[12][0-9]|3[01])\/\d\d\/\d\d\d\d/i;

    if (!watchedAt) {
        return res.status(ERROR_MESSAGE).json({ message: 'O campo "watchedAt" é obrigatório' }); 
    }
    if (!dateRegex.test(watchedAt)) {
        return res.status(ERROR_MESSAGE)
        .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }
    return next();
}

module.exports = watchedAtValidation;