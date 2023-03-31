"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var TaskSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: [true, "Name must be provided"],
        trim: true,
        maxlength: [100, "Name cannot be more than 100 characters"],
    },
    completed: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
}, {
    timestamps: true,
});
var Task = mongoose_1.default.model("Task", TaskSchema);
exports.default = Task;
