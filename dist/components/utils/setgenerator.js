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
var SetGenerator = /*#__PURE__*/function () {
  function SetGenerator() {
    _classCallCheck(this, SetGenerator);
  }

  _createClass(SetGenerator, [{
    key: "generateFixedInt",
    value:
    /**
     *
     */
    function generateFixedInt(length, value) {
      var data = [];

      for (var i = 0; i < length; i++) {
        data.push(value);
      }

      return data;
    }
    /**
     *
     */

  }, {
    key: "generateRandomInt",
    value: function generateRandomInt(length) {
      var data = [];

      for (var i = 0; i < length; i++) {
        data.push(Math.floor(Math.random() * 10));
      }

      return data;
    }
  }]);

  return SetGenerator;
}();

var _default = SetGenerator;
exports["default"] = _default;