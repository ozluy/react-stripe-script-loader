"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var StripeScriptLoader = function StripeScriptLoader(_ref) {
  var children = _ref.children,
      uniqueId = _ref.uniqueId,
      script = _ref.script,
      _ref$loader = _ref.loader,
      loader = _ref$loader === void 0 ? 'Loading...' : _ref$loader;

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      stripeLoaded = _useState2[0],
      setStripeLoaded = _useState2[1];

  (0, _react.useEffect)(function () {
    var loadScript = function loadScript(src, uniqueId) {
      return new Promise(function (resolve, reject) {
        var scriptElement = document.getElementById(uniqueId);

        if (!scriptElement) {
          var _script = document.createElement('script');

          _script.src = src;
          _script.id = uniqueId;

          var handleLoadScriptSuccess = function handleLoadScriptSuccess() {
            return resolve({
              successful: true
            });
          };

          var handleLoadScriptFail = function handleLoadScriptFail(event) {
            return reject({
              error: event
            });
          };

          _script.addEventListener('load', handleLoadScriptSuccess, {
            once: true
          });

          _script.addEventListener('error', handleLoadScriptFail, {
            once: true
          });

          document.head.appendChild(_script);
        } else {
          resolve({
            successful: true
          });
        }
      });
    };

    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return loadScript(script, uniqueId);

              case 2:
                result = _context.sent;
                setStripeLoaded(result);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref2.apply(this, arguments);
      };
    }();

    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return stripeLoaded.successful ? children : loader;
};

var _default = StripeScriptLoader;
exports["default"] = _default;
