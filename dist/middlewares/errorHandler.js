"use strict";
// import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
// import CustomAPIError, { createCustomError } from "../errors/customError";
// export const errorHandler = async (
//   err: Error | any,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   if (err instanceof CustomAPIError) {
//     return res.status(err.status).json({ msg: err.message });
//   }
//   return res
//     .status(500)
//     .json({ msg: "Something went wrong... Please try again" });
// };
// export const errorHandlerMiddleware = (
//   err: any,
//   req: any,
//   res: any,
//   next: any
// ) => {
//   res.status(500).json({ msg: err });
// };
