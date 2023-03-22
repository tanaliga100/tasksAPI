import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import CustomAPIError, { createCustomError } from "../errors/customError";

export const errorHandler = async (
  err: Error | any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomAPIError) {
    console.log("ERROR IS INSTANCE OF CUSTOM API ERROR");

    return res.status(err.status).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: "ID is not the equivalent length... Something went wrong" });
};
