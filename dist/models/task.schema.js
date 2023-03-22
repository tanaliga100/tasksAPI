"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var TaskSchema = new mongoose_1.default.Schema({
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
var Task = mongoose_1.default.model("Task", TaskSchema);
exports.default = Task;
