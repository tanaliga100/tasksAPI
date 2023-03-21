import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import { connectDB } from "./config/connect";
import { tasksRoute } from "./routers/tasks";
dotenv.config();

console.log(process.env.PORT);

const app: Express = express();
const port = process.env.PORT || 5001;
app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req: Request, res: Response) => {
  res.json({ msg: "Server Alive" });
});
app.use("/api/v1/tasks", tasksRoute);

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
