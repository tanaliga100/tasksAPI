"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleware = void 0;
var errorHandlerMiddleware = function (err, req, res, next) {
    console.log(err instanceof Error ? "CUSTOM_ERROR" : "FALLBACK_ERROR");
    var customError = {
        message: err.message || "Something went wrong",
        statusCode: err.statusCode || 404,
    };
    if (err instanceof Error) {
        return res.status(customError.statusCode).json({
            message: customError.message,
            status: customError.statusCode,
        });
    }
    return res.status(customError.statusCode).json({
        errorMessage: customError.message,
        errorStatus: customError.statusCode,
    });
};
exports.errorHandlerMiddleware = errorHandlerMiddleware;
