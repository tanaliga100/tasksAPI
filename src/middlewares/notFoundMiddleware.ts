import { NextFunction, Request, Response } from "express";

export const notFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404).send(
    `<small style="textAlign="center"">Route does not exist</small>
  <a href="/">Go Back</a>
  `
  );
};
