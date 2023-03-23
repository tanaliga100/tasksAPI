import { NextFunction, Request, Response } from "express";
import CustomAPIError from "../errors/customError";

export const errorHandler = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomAPIError) {
    console.log(err);
    // custom error handler...
    return res.status(err.status).json({ error: err.message });
  }
  // generic error...
  return res.status(500).json({ error: "Internal server error" });
};
