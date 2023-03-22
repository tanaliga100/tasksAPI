import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  // title: {
  //   type: String,
  //   required: [true, "Title must be provided"],
  //   trim: true,
  //   maxlength: [20, "Name cannot be more than 20 characters"],
  // },
  // description: {
  //   type: String,
  //   required: [true, "Description must be provided"],
  //   trim: true,
  // },
  // completed: {
  //   type: Boolean,
  //   default: false,
  // },
  name: {
    type: String,
    required: [true, "Name must be provided"],
    trim: true,
    maxlength: [20, "Name cannot be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
const Task = mongoose.model("Task", TaskSchema);
export default Task;
