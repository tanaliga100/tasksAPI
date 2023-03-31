import { NextFunction, Request, Response } from "express";
import { Error } from "mongoose";
import CustomAPIError from "../errors/customErrorClass";
import { IError } from "../interfaces/tasks.model";

export const errorHandlerMiddleware = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log({ error });

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
