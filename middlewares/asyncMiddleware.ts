import { log } from "console";
import { NextFunction, Request, Response } from "express";

const asyncMiddleware = (fn: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export default asyncMiddleware;
// import { NextFunction, Request, Response } from "express";
// import CustomAPIError from "../errors/customError";

// const asyncMiddleware =
//   (fn: any) => (req: Request, res: Response, next: any) => {
//     Promise.resolve(fn(req, res, next)).catch(next);
//   };

// export default asyncMiddleware;
