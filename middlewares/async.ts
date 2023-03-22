import { NextFunction, Request, Response } from "express";
const asyncWrapper = (callback: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await callback(req, res, next);
    } catch (error: any) {
      // console.log("FROM ASYNC CATCH", error);
      // this 'NEXT' middleware is the blueprint of 'errorHandlerMiddleware' which recieves the error object;
      next(error);
    }
  };
};

export default asyncWrapper;
