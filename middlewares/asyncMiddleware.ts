import { NextFunction, Request, Response } from "express";
import CustomAPIError from "../errors/customErrorClass";

export const asyncMiddleware = (fn: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error); // this would be the blueprint of the CustomAPIError
    }
  };
};

export const catchAsync = (fn: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};
