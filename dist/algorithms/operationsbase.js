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
var OperationsBase = /*#__PURE__*/function () {
  /**
   * 
   */
  function OperationsBase() {
    _classCallCheck(this, OperationsBase);

    this.name = "base";
    this.operations = [];
  }
  /**
   * 
   */


  _createClass(OperationsBase, [{
    key: "setName",
    value: function setName(aName) {
      this.name = aName;
    }
    /**
     * 
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
    /**
     * 
     */

  }, {
    key: "addOperation",
    value: function addOperation(aName) {
      this.operations.push(aName);
    }
  }]);

  return OperationsBase;
}();

var _default = OperationsBase;
exports["default"] = _default;