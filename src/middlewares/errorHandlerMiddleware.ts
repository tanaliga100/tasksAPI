import { NextFunction, Request, Response } from "express";
import CustomAPIError from "../errors/custom-error";

export const errorHandlerMiddleware = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(
    error instanceof CustomAPIError ? "CUSTOM_ERROR" : "FALLBACK_ERROR"
  );
  let customError = {
    message: error.message || "Something went wrong",
    statusCode: error.statusCode || 404,
  };
  if (error instanceof CustomAPIError) {
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
