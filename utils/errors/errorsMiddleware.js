module.exports.errorMiddleware = (error, req, res, next) => {
    res.send({
        status: error.name,
        message: error.message
    });
};
