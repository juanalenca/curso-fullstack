exports.middlewareGobal = (req, res, next) => {
    // if(req.body.client) {
    //     req.body.client = req.body.client.replace("Álvaro", "DON'T USE ÁLVARO")
    //     console.log(`\nYour menssage: ${req.body.client}\n`)
    // }
    next();
}
