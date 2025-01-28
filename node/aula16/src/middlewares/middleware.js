exports.middlewareGobal = (req, res, next) => {
    res.locals.oneGlobalVariable = 'variable local value'
    next();
}
