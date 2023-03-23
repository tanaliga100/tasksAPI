import { NextFunction, Request, Response } from "express";

const notFound = (req: Request, res: Response) => {
  res.status(404).send(
    `<small style="textAlign="center"">I cannot find what you are looking for</small>
  <a href="/">Go Back</a>
  `
  );
};

export default notFound;
