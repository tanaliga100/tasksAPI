import express from "express";
import {
  ALL_TASKS,
  CREATE_TASK,
  DELETE_TASK,
  GET_TASK,
  UPDATE_TASK,
} from "../controllers/tasks";
const router = express.Router();

router.route("/").get(ALL_TASKS).post(CREATE_TASK);
router.route("/:id").get(GET_TASK).patch(UPDATE_TASK).delete(DELETE_TASK);

export const tasksRoute = router;
