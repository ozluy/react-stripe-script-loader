"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var StripeScriptLoader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StripeScriptLoader, _React$Component);

  function StripeScriptLoader(props) {
    var _this;

    _classCallCheck(this, StripeScriptLoader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StripeScriptLoader).call(this, props));
    _this.state = {
      stripeLoaded: {}
    };
    _this.loadScript = _this.loadScript.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(StripeScriptLoader, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this$props, script, uniqueId, stripeLoaded;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, script = _this$props.script, uniqueId = _this$props.uniqueId;
                _context.next = 3;
                return this.loadScript(script, uniqueId);

              case 3:
                stripeLoaded = _context.sent;
                this.setState({
                  stripeLoaded: stripeLoaded
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: "loadScript",
    value: function loadScript(src, uniqueId) {
      return new Promise(function (resolve, reject) {
        var scriptElement = document.getElementById(uniqueId);

        if (!scriptElement) {
          var script = document.createElement('script');
          script.src = src;
          script.id = uniqueId;

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

          script.addEventListener('load', handleLoadScriptSuccess, {
            once: true
          });
          script.addEventListener('error', handleLoadScriptFail, {
            once: true
          });
          document.head.appendChild(script);
        } else {
          resolve({
            successful: true
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var stripeLoaded = this.state.stripeLoaded;
      var _this$props2 = this.props,
          children = _this$props2.children,
          loader = _this$props2.loader;
      return _react["default"].createElement("div", null, stripeLoaded.successful ? children : loader);
    }
  }]);

  return StripeScriptLoader;
}(_react["default"].Component);

StripeScriptLoader.defaultProps = {
  loader: 'Loading...',
  uniqueId: 'myUniqueId',
  script: 'https://js.stripe.com/v3/'
};
var _default = StripeScriptLoader;
exports["default"] = _default;
