import dotenv from "dotenv";
import express, { Express, NextFunction, Request, Response } from "express";
import { Error } from "mongoose";
import morgan from "morgan";
import path from "path";
import { connectDB } from "./config/connect";
import CustomAPIError from "./errors/customError";
import { tasksRoute } from "./routers/tasks";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(morgan("tiny"));

app.use("/api/v1/tasks", tasksRoute);
// app.use(notFound)
app.use((req: any, res: any) => {
  res.status(404).send(
    `<small style="textAlign="center"">I cannot find what you are looking for</small>
  <a href="/">Go Back</a>
  `
  );
});
// app.use(errorHandlerMiddleware);
app.use(
  (err: CustomAPIError, req: Request, res: Response, next: NextFunction) => {
    console.log(err.message);
    console.log(err.status);
    if (err instanceof CustomAPIError) {
      return res.status(err.status).json({ msg: err.message });
    }
    return res.status(500).json({ msg: "Something went wrong !", status: 500 });
  }
);

const start = async (port: any) => {
  try {
    await connectDB(process.env.MONGO_URI);
    await app.listen(port, () =>
      console.log("DB ESTABLISHED && LISTENING => " + port)
    );
  } catch (error: any) {
    console.log(error);
  }
};
start(port);
