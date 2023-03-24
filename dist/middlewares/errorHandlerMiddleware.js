"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleware = void 0;
var errorHandlerMiddleware = function (error, req, res, next) {
    console.log({ error: error });
    // if (error instanceof CustomAPIError) {
    //   return res.status(error.status).send({
    //     msg: error.message,
    //     status: error.status,
    //     isCustomError: error instanceof CustomAPIError,
    //   });
    // }
    res
        .status(error.status || 501)
        .json({ msg: error.message || "Something went wrong..CAST ERROR" });
};
exports.errorHandlerMiddleware = errorHandlerMiddleware;
