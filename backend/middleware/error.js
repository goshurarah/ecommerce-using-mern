const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Servers Error';
    // wrong monsoge id 
    if (err.name === 'CastError') {
        const message = `Resource Not Found Invalid: ${err.path} `;
        err = new ErrorHandler(message, 400)
    }
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(value => value.message)
        err = new ErrorHandler(message, 400)
    }
    if (err.code == 11000) {
        const message = ` Duplicate ${Object.keys(err.keyValue)} entered`

        err = new ErrorHandler(message, 400)
    }
    if (err.name === 'JsonWebTokenError') {
        const message = "JsonWebTokenError is InValid Try Again!!";
        err = new ErrorHandler(message, 400)
    }
    if (err.name === 'TokenExpiredError') {
        const message = "JsonWebToken Expired Try Again!!";
        err = new ErrorHandler(message, 400)
    }


    res.status(err.statusCode).json({
        success: false,
        message: err.message
    })
}