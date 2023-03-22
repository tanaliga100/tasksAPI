import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import path from "path";
import { connectDB } from "./config/connect";
import { errorHandler } from "./middlewares/errorHandler";
import notFound from "./middlewares/notFound";
import { tasksRoute } from "./routers/tasks";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(morgan("tiny"));

app.use("/api/v1/tasks", tasksRoute);
app.use(errorHandler);
app.use(notFound);

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
