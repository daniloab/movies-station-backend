"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

_dotenv["default"].config();

var _process$env = process.env,
    api_url = _process$env.api_url,
    api_key = _process$env.api_key;

var MovieController =
/*#__PURE__*/
function () {
  function MovieController() {
    _classCallCheck(this, MovieController);
  }

  _createClass(MovieController, [{
    key: "upcoming",
    value: function () {
      var _upcoming = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res) {
        var page, urlMoviesUpcoming, response, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                page = req.query.page;
                urlMoviesUpcoming = "".concat(api_url, "/movie/upcoming?api_key=").concat(api_key, "&language=en-US&page=").concat(page);
                _context.next = 4;
                return (0, _nodeFetch["default"])(urlMoviesUpcoming);

              case 4:
                response = _context.sent;
                _context.next = 7;
                return response.json();

              case 7:
                data = _context.sent;
                return _context.abrupt("return", res.status(200).send(data.results));

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function upcoming(_x, _x2) {
        return _upcoming.apply(this, arguments);
      }

      return upcoming;
    }()
  }, {
    key: "details",
    value: function () {
      var _details = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res) {
        var id, url, response, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = req.params.id;
                url = "".concat(api_url, "/movie/").concat(id, "?api_key=").concat(api_key, "&language=en-US");
                _context2.next = 4;
                return (0, _nodeFetch["default"])(url);

              case 4:
                response = _context2.sent;
                _context2.next = 7;
                return response.json();

              case 7:
                data = _context2.sent;
                return _context2.abrupt("return", res.status(200).send(data));

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function details(_x3, _x4) {
        return _details.apply(this, arguments);
      }

      return details;
    }()
  }, {
    key: "genres",
    value: function () {
      var _genres = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(req, res) {
        var url, response, data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = "".concat(api_url, "/genre/movie/list?api_key=").concat(api_key, "&language=en-US");
                _context3.next = 3;
                return (0, _nodeFetch["default"])(url);

              case 3:
                response = _context3.sent;
                _context3.next = 6;
                return response.json();

              case 6:
                data = _context3.sent;
                return _context3.abrupt("return", res.status(200).send(data.genres));

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function genres(_x5, _x6) {
        return _genres.apply(this, arguments);
      }

      return genres;
    }()
  }, {
    key: "search",
    value: function () {
      var _search = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(req, res) {
        var _req$query, query, page, url, response, data;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _req$query = req.query, query = _req$query.query, page = _req$query.page;
                url = "".concat(api_url, "/search/movie?api_key=").concat(api_key, "&query=").concat(query, "&page=").concat(page, "&language=en-US");
                _context4.next = 4;
                return (0, _nodeFetch["default"])(url);

              case 4:
                response = _context4.sent;
                _context4.next = 7;
                return response.json();

              case 7:
                data = _context4.sent;
                return _context4.abrupt("return", res.status(200).send(data));

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function search(_x7, _x8) {
        return _search.apply(this, arguments);
      }

      return search;
    }()
  }]);

  return MovieController;
}();

var _default = new MovieController();

exports["default"] = _default;