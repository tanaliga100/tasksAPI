import { NextFunction, Request, Response } from "express";

export const errorHandlerMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err instanceof Error ? "CUSTOM_ERROR" : "FALLBACK_ERROR");
  let customError = {
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
