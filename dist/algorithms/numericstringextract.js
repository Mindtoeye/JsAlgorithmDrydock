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
var NumericStringExtract = /*#__PURE__*/function () {
  function NumericStringExtract() {
    _classCallCheck(this, NumericStringExtract);
  }

  _createClass(NumericStringExtract, [{
    key: "extract",
    value:
    /**
     *
     */
    function extract(str, pattern) {
      return (str.match(pattern) || []).pop() || '';
    }
    /**
     *
     */

  }, {
    key: "extractHexadecimal",
    value: function extractHexadecimal(str) {
      var result = this.extract(str, "0x[0-9a-fA-F]+");

      if (result == "") {
        return "00";
      }

      return result;
    }
    /**
     *
     */

  }, {
    key: "extractBinary",
    value: function extractBinary(str) {
      var result = this.extract(str, "^[0-1]*$");

      if (result == "") {
        return "0";
      }

      return result;
    }
    /**
     *
     */

  }, {
    key: "extractInteger",
    value: function extractInteger(str) {
      var result = this.extract(str, "^[-+]?[0-9]*$");

      if (result == "") {
        return "0";
      }

      return result;
    }
    /**
     * https://www.regular-expressions.info/floatingpoint.html
     */

  }, {
    key: "extractFloat",
    value: function extractFloat(str) {
      var result = this.extract(str, "^[-+]?[0-9]*\.?[0-9]+$");

      if (result == "") {
        return "0.0";
      }

      return result;
    }
  }]);

  return NumericStringExtract;
}();

var _default = NumericStringExtract;
exports["default"] = _default;