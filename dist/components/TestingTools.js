"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 *
 */
var TestingTools = /*#__PURE__*/function () {
  function TestingTools() {
    _classCallCheck(this, TestingTools);
  }

  _createClass(TestingTools, [{
    key: "wrapResult",
    value:
    /**
     * We wrap every result from an algorithm function into an object so that
     * the diff tool has a consistent structure to work with
     */
    function wrapResult(aData) {
      return {
        result: aData
      };
    }
  }]);

  return TestingTools;
}();

var _default = TestingTools;
exports["default"] = _default;