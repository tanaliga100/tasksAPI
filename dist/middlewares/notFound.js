"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var notFound = function (req, res, next) {
    res.status(404).send("<small style=\"textAlign=\"center\"\">I cannot find what you are looking for</small>\n  <a href=\"/\">Go Back</a>\n  ");
    next();
};
exports.default = notFound;
