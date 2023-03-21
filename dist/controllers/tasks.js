"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.getTask = exports.getAllTasks = exports.deleteTask = exports.createTask = void 0;
var Tasks = [];
var getAllTasks = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.json(Tasks);
        return [2 /*return*/];
    });
}); };
exports.getAllTasks = getAllTasks;
var createTask = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, description, newTask;
    return __generator(this, function (_b) {
        _a = req.body, title = _a.title, description = _a.description;
        if (!title || !description) {
            return [2 /*return*/, res
                    .status(400)
                    .json({ msg: "Title and description must be provided" })];
        }
        else {
            newTask = {
                id: String(Math.floor(Math.random() * 20 + 100)),
                title: title,
                description: description,
                completed: false,
            };
            Tasks.push(newTask);
        }
        res.status(200).json({ msg: "TASK CREATED", Tasks: Tasks });
        return [2 /*return*/];
    });
}); };
exports.createTask = createTask;
var getTask = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var taskId, task;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                taskId = req.params.id;
                return [4 /*yield*/, Tasks.find(function (task) { return task.id === taskId; })];
            case 1:
                task = _a.sent();
                if (!taskId) {
                    return [2 /*return*/, res.status(404).json({ msg: "Task not found" })];
                }
                else {
                    res.json({ msg: "SINGLE TASK", task: task });
                }
                return [2 /*return*/];
        }
    });
}); };
exports.getTask = getTask;
var deleteTask = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var taskId, task, updatedTask;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                taskId = req.params.id;
                return [4 /*yield*/, Tasks.findIndex(function (t) { return t.id === taskId; })];
            case 1:
                task = _a.sent();
                if (!(task === -1)) return [3 /*break*/, 2];
                return [2 /*return*/, res.status(404).json({ msg: "Task not found" })];
            case 2: return [4 /*yield*/, Tasks.splice(task, 1)[0]];
            case 3:
                updatedTask = _a.sent();
                res.status(200).json({ msg: "TASK DELETED", updatedTask: updatedTask });
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteTask = deleteTask;
var updateTask = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send("Update Task");
        return [2 /*return*/];
    });
}); };
exports.updateTask = updateTask;
