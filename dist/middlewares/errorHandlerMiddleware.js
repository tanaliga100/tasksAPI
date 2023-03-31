"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleware = void 0;
var custom_error_1 = __importDefault(require("../errors/custom-error"));
var errorHandlerMiddleware = function (error, req, res, next) {
    console.log(error instanceof custom_error_1.default ? "CUSTOM_ERROR" : "FALLBACK_ERROR");
    var customError = {
        message: error.message || "Something went wrong",
        statusCode: error.statusCode || 404,
    };
    if (error instanceof custom_error_1.default) {
        return res
            .status(customError.statusCode)
            .json({ msg: customError.message, status: customError.statusCode });
    }
    return res.status(400).json({ msg: "Something went wrong" });
    return res.status(customError.statusCode).json({
        errorMessage: customError.message,
        errorStatus: customError.statusCode,
    });
};
exports.errorHandlerMiddleware = errorHandlerMiddleware;
