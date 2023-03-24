"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundMiddleware = void 0;
var notFoundMiddleware = function (req, res, next) {
    res.status(404).send("<small style=\"textAlign=\"center\"\">Route does not exist</small>\n  <a href=\"/\">Go Back</a>\n  ");
};
exports.notFoundMiddleware = notFoundMiddleware;
