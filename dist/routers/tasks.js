"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksRoute = void 0;
var express_1 = __importDefault(require("express"));
var tasks_1 = require("../controllers/tasks");
var router = express_1.default.Router();
router.route("/").get(tasks_1.getAllTasks).post(tasks_1.createTask);
router.route("/:id").get(tasks_1.getTask).patch(tasks_1.updateTask).delete(tasks_1.deleteTask);
exports.tasksRoute = router;
