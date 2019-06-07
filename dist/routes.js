"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _MovieController = _interopRequireDefault(require("./controllers/MovieController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = _express["default"].Router();

routes.get("/movies/upcoming", _MovieController["default"].upcoming);
routes.get("/movies/genres", _MovieController["default"].genres);
routes.get("/movies/search", _MovieController["default"].search);
routes.get("/movies/details/:id", _MovieController["default"].details);
var _default = routes;
exports["default"] = _default;