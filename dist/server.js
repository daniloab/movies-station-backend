"use strict";

require("@babel/polyfill");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _cors["default"])());

var server = require('http').Server(app);

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_routes["default"]);
server.listen(process.env.PORT || 8080, function () {
  console.log("server running and listening on ".concat(process.env.URL));
});