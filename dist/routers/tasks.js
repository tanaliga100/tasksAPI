"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksRoute = void 0;
var express_1 = __importDefault(require("express"));
var tasks_1 = require("../controllers/tasks");
var router = express_1.default.Router();
router.route("/").get(tasks_1.ALL_TASKS).post(tasks_1.CREATE_TASK);
router.route("/:id").get(tasks_1.GET_TASK).patch(tasks_1.UPDATE_TASK).delete(tasks_1.DELETE_TASK);
exports.tasksRoute = router;
