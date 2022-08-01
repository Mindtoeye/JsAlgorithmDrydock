"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _numericstringextract = _interopRequireDefault(require("../algorithms/numericstringextract"));

var _basicstatisticstests = _interopRequireDefault(require("../algorithms/basicstatisticstests"));

var _setoperations = _interopRequireDefault(require("../algorithms/setoperations"));

var _sortoperations = _interopRequireDefault(require("../algorithms/sortoperations"));

var _setgenerator = _interopRequireDefault(require("./utils/setgenerator"));

var _datatools = _interopRequireDefault(require("./utils/datatools"));

var _TestingTools = _interopRequireDefault(require("./TestingTools"));

var _diff = require("./treekit/diff");

var _tests = require("./tests");

require("../../../css/main.css");

require("../../../css/verticaltabs.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 *
 */
var JsAlgorithmDrydock = /*#__PURE__*/function (_Component) {
  _inherits(JsAlgorithmDrydock, _Component);

  var _super = _createSuper(JsAlgorithmDrydock);

  /**
   *
   */
  function JsAlgorithmDrydock(props) {
    var _this;

    _classCallCheck(this, JsAlgorithmDrydock);

    _this = _super.call(this, props);
    _this.setGenerator = new _setgenerator["default"]();
    _this.dataTools = new _datatools["default"]();

    var data = _this.dataTools.deepCopy(_tests.tests);

    _this.prep(data);

    _this.state = {
      tab: 0,
      tabs: data
    };
    _this.stringExtract = new _numericstringextract["default"]();
    _this.basicStats = new _basicstatisticstests["default"]();
    _this.setOperations = new _setoperations["default"]();
    _this.sortOperations = new _sortoperations["default"]();
    _this.switchTab = _this.switchTab.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   *
   */


  _createClass(JsAlgorithmDrydock, [{
    key: "prep",
    value: function prep(data) {
      console.log("prep ()");
      var result = (0, _diff.diff)(data, _tests.tests);
      console.log(result);

      for (var i = 0; i < data.length; i++) {
        var entry = data[i];

        if (i == 0) {
          entry.active = "active";
          entry.shown = "shown";
        } else {
          entry.active = " ";
          entry.shown = "hidden";
        }
      }
    }
    /**
     *
     */

  }, {
    key: "switchTab",
    value: function switchTab(e, target) {
      console.log("switchTab (" + target + ")");
      var newTabs = this.dataTools.deepCopy(this.state.tabs);

      for (var i = 0; i < newTabs.length; i++) {
        newTabs[i].active = "";
        newTabs[i].shown = "hidden";

        if (target == i) {
          newTabs[i].active = "active";
          newTabs[i].shown = "shown";
        }
      }

      this.setState({
        tab: target,
        tabs: newTabs
      });
    }
    /**
     *
     */

  }, {
    key: "generateTest1",
    value: function generateTest1() {
      return /*#__PURE__*/_react["default"].createElement("table", {
        className: "darkTable"
      }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Evaluation"), /*#__PURE__*/_react["default"].createElement("th", null, "Input"), /*#__PURE__*/_react["default"].createElement("th", null, "Function"), /*#__PURE__*/_react["default"].createElement("th", null, "Output"))), /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, "01az"), /*#__PURE__*/_react["default"].createElement("td", null, " extract [0-9a-fA-F]+ "), /*#__PURE__*/_react["default"].createElement("td", null, this.stringExtract.extract("01az", "[0-9a-fA-F]+"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, "0x54"), /*#__PURE__*/_react["default"].createElement("td", null, " extractHexadecimal "), /*#__PURE__*/_react["default"].createElement("td", null, this.stringExtract.extractHexadecimal("0x54"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, "0x12"), /*#__PURE__*/_react["default"].createElement("td", null, " extractHexadecimal "), /*#__PURE__*/_react["default"].createElement("td", null, this.stringExtract.extractHexadecimal("0x12"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, "5400"), /*#__PURE__*/_react["default"].createElement("td", null, " extractHexadecimal "), /*#__PURE__*/_react["default"].createElement("td", null, this.stringExtract.extractHexadecimal("5400"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, "abcdefghijklmopqrstuvwxyz"), /*#__PURE__*/_react["default"].createElement("td", null, " extractHexadecimal "), /*#__PURE__*/_react["default"].createElement("td", null, this.stringExtract.extractHexadecimal("abcdefghijklmopqrstuvwxyz"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, "abcdefghijklmopqrstuvwxyz"), /*#__PURE__*/_react["default"].createElement("td", null, " extractInteger "), /*#__PURE__*/_react["default"].createElement("td", null, this.stringExtract.extractInteger("abcdefghijklmopqrstuvwxyz"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, "11101001010"), /*#__PURE__*/_react["default"].createElement("td", null, " extractBinary "), /*#__PURE__*/_react["default"].createElement("td", null, this.stringExtract.extractBinary("11101001010"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, "abcdefghijklmopqrstuvwxyz"), /*#__PURE__*/_react["default"].createElement("td", null, " extractBinary "), /*#__PURE__*/_react["default"].createElement("td", null, this.stringExtract.extractBinary("abcdefghijklmopqrstuvwxyz"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, "5400"), /*#__PURE__*/_react["default"].createElement("td", null, " extractInteger "), /*#__PURE__*/_react["default"].createElement("td", null, this.stringExtract.extractInteger("5400"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, "+5400"), /*#__PURE__*/_react["default"].createElement("td", null, " extractInteger "), /*#__PURE__*/_react["default"].createElement("td", null, this.stringExtract.extractInteger("+5400"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, "-5400"), /*#__PURE__*/_react["default"].createElement("td", null, " extractInteger "), /*#__PURE__*/_react["default"].createElement("td", null, this.stringExtract.extractInteger("-5400"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, "5.4"), /*#__PURE__*/_react["default"].createElement("td", null, " extractFloat "), /*#__PURE__*/_react["default"].createElement("td", null, this.stringExtract.extractFloat("5.4"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, "-5.4"), /*#__PURE__*/_react["default"].createElement("td", null, " extractFloat "), /*#__PURE__*/_react["default"].createElement("td", null, this.stringExtract.extractFloat("-5.4"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, ".5"), /*#__PURE__*/_react["default"].createElement("td", null, " extractFloat "), /*#__PURE__*/_react["default"].createElement("td", null, this.stringExtract.extractFloat(".5"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, "5"), /*#__PURE__*/_react["default"].createElement("td", null, " extractFloat "), /*#__PURE__*/_react["default"].createElement("td", null, this.stringExtract.extractFloat("5"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, "-5"), /*#__PURE__*/_react["default"].createElement("td", null, " extractFloat "), /*#__PURE__*/_react["default"].createElement("td", null, this.stringExtract.extractFloat("-5"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, "abcdefghijklmopqrstuvwxyz"), /*#__PURE__*/_react["default"].createElement("td", null, " extractFloat "), /*#__PURE__*/_react["default"].createElement("td", null, this.stringExtract.extractFloat("abcdefghijklmopqrstuvwxyz")))));
    }
    /**
     *
     */

  }, {
    key: "generateTest2",
    value: function generateTest2() {
      var setFixed = this.setGenerator.generateFixedInt(10, 3);
      var setRandom = this.setGenerator.generateRandomInt(10);
      return /*#__PURE__*/_react["default"].createElement("table", {
        className: "darkTable"
      }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Evaluation"), /*#__PURE__*/_react["default"].createElement("th", null, "Input"), /*#__PURE__*/_react["default"].createElement("th", null, "Function"), /*#__PURE__*/_react["default"].createElement("th", null, "Output"))), /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, JSON.stringify(setFixed)), /*#__PURE__*/_react["default"].createElement("td", null, " median "), /*#__PURE__*/_react["default"].createElement("td", null, this.basicStats.mean(setFixed))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, JSON.stringify(setRandom)), /*#__PURE__*/_react["default"].createElement("td", null, " median "), /*#__PURE__*/_react["default"].createElement("td", null, this.basicStats.mean(setRandom))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, JSON.stringify(setRandom)), /*#__PURE__*/_react["default"].createElement("td", null, " range "), /*#__PURE__*/_react["default"].createElement("td", null, JSON.stringify(this.basicStats.range(setRandom))))));
    }
    /**
     *
     */

  }, {
    key: "generateTest3",
    value: function generateTest3() {
      return /*#__PURE__*/_react["default"].createElement("table", {
        className: "darkTable"
      }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Evaluation"), /*#__PURE__*/_react["default"].createElement("th", null, "Input"), /*#__PURE__*/_react["default"].createElement("th", null, "Function"), /*#__PURE__*/_react["default"].createElement("th", null, "Output"))), /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, "01az"), /*#__PURE__*/_react["default"].createElement("td", null, " extract [0-9a-fA-F]+ "), /*#__PURE__*/_react["default"].createElement("td", null, this.stringExtract.extract("01az", "[0-9a-fA-F]+")))));
    }
    /**
     *
     */

  }, {
    key: "generateTest4",
    value: function generateTest4() {
      var setRandom1 = this.setGenerator.generateRandomInt(10);
      var setRandom2 = this.setGenerator.generateRandomInt(10);
      return /*#__PURE__*/_react["default"].createElement("table", {
        className: "darkTable"
      }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Evaluation"), /*#__PURE__*/_react["default"].createElement("th", null, "Input"), /*#__PURE__*/_react["default"].createElement("th", null, "Function"), /*#__PURE__*/_react["default"].createElement("th", null, "Output"))), /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, JSON.stringify(setRandom1) + ", " + JSON.stringify(setRandom2)), /*#__PURE__*/_react["default"].createElement("td", null, " and "), /*#__PURE__*/_react["default"].createElement("td", null, JSON.stringify(this.setOperations.and(setRandom1, setRandom2)))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, JSON.stringify(setRandom1) + ", " + JSON.stringify(setRandom2)), /*#__PURE__*/_react["default"].createElement("td", null, " or "), /*#__PURE__*/_react["default"].createElement("td", null, JSON.stringify(this.setOperations.or(setRandom1, setRandom2))))));
    }
    /**
     *
     */

  }, {
    key: "generateTest5",
    value: function generateTest5() {
      return /*#__PURE__*/_react["default"].createElement("table", {
        className: "darkTable"
      }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Evaluation"), /*#__PURE__*/_react["default"].createElement("th", null, "Input"), /*#__PURE__*/_react["default"].createElement("th", null, "Function"), /*#__PURE__*/_react["default"].createElement("th", null, "Output"))), /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, "01az"), /*#__PURE__*/_react["default"].createElement("td", null, " extract [0-9a-fA-F]+ "), /*#__PURE__*/_react["default"].createElement("td", null, this.stringExtract.extract("01az", "[0-9a-fA-F]+")))));
    }
    /**
     *
     */

  }, {
    key: "generateTest6",
    value: function generateTest6() {
      var sortInputArray = ["apples", "cranberries", "bananas", "oranges", "grapefruit"];
      var sortInputObjects = [{
        "title": "apples"
      }, {
        "title": "cranberries"
      }, {
        "title": "bananas"
      }, {
        "title": "oranges"
      }, {
        "title": "grapefruit"
      }];
      var sortInputArrayNumbers = [100, 5, 399, 3, 1];
      var sortInputObjectsNumbers = [{
        "value": 100
      }, {
        "value": 5
      }, {
        "value": 399
      }, {
        "value": 3
      }, {
        "value": 1
      }];
      return /*#__PURE__*/_react["default"].createElement("table", {
        className: "darkTable"
      }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Evaluation"), /*#__PURE__*/_react["default"].createElement("th", null, "Input"), /*#__PURE__*/_react["default"].createElement("th", null, "Function"), /*#__PURE__*/_react["default"].createElement("th", null, "Output"))), /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, JSON.stringify(sortInputArray)), /*#__PURE__*/_react["default"].createElement("td", null, " sort lexically "), /*#__PURE__*/_react["default"].createElement("td", null, JSON.stringify(this.sortOperations.sortAZ(this.dataTools.deepCopy(sortInputArray), null)))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, JSON.stringify(sortInputArray)), /*#__PURE__*/_react["default"].createElement("td", null, " sort lexically (reverse) "), /*#__PURE__*/_react["default"].createElement("td", null, JSON.stringify(this.sortOperations.sortZA(this.dataTools.deepCopy(sortInputArray), null)))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, JSON.stringify(sortInputObjects)), /*#__PURE__*/_react["default"].createElement("td", null, " sort lexically "), /*#__PURE__*/_react["default"].createElement("td", null, JSON.stringify(this.sortOperations.sortAZ(this.dataTools.deepCopy(sortInputObjects), "title")))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, JSON.stringify(sortInputObjects)), /*#__PURE__*/_react["default"].createElement("td", null, " sort lexically (reverse)"), /*#__PURE__*/_react["default"].createElement("td", null, JSON.stringify(this.sortOperations.sortZA(this.dataTools.deepCopy(sortInputObjects), "title")))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, JSON.stringify(sortInputArrayNumbers)), /*#__PURE__*/_react["default"].createElement("td", null, " sort numerically "), /*#__PURE__*/_react["default"].createElement("td", null, JSON.stringify(this.sortOperations.sortNumeric(this.dataTools.deepCopy(sortInputArrayNumbers), null)))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, JSON.stringify(sortInputArrayNumbers)), /*#__PURE__*/_react["default"].createElement("td", null, " sort numerically (reverse) "), /*#__PURE__*/_react["default"].createElement("td", null, JSON.stringify(this.sortOperations.sortNumericReverse(this.dataTools.deepCopy(sortInputArrayNumbers), null)))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, JSON.stringify(sortInputObjectsNumbers)), /*#__PURE__*/_react["default"].createElement("td", null, " sort numerically "), /*#__PURE__*/_react["default"].createElement("td", null, JSON.stringify(this.sortOperations.sortNumeric(this.dataTools.deepCopy(sortInputObjectsNumbers), "value")))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Correct"), /*#__PURE__*/_react["default"].createElement("td", null, JSON.stringify(sortInputObjectsNumbers)), /*#__PURE__*/_react["default"].createElement("td", null, " sort numerically (reverse)"), /*#__PURE__*/_react["default"].createElement("td", null, JSON.stringify(this.sortOperations.sortNumericReverse(this.dataTools.deepCopy(sortInputObjectsNumbers), "value"))))));
    }
    /**
     *
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var context = this.state.tabs[this.state.tab].title;
      var content = this.state.tabs[this.state.tab].help;
      var tab1 = this.generateTest1();
      var tab2 = this.generateTest2();
      var tab3 = this.generateTest3();
      var tab4 = this.generateTest4();
      var tab5 = this.generateTest5();
      var tab6 = this.generateTest6();
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "maincontainer"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "maintitleheader"
      }, /*#__PURE__*/_react["default"].createElement("h1", null, "Knossys Algorithm Drydock")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "tabcontainer"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "tab"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "tablinks " + this.state.tabs[0].active,
        onClick: function onClick(e) {
          return _this2.switchTab(e, 0);
        }
      }, this.state.tabs[0].title), /*#__PURE__*/_react["default"].createElement("button", {
        className: "tablinks " + this.state.tabs[1].active,
        onClick: function onClick(e) {
          return _this2.switchTab(e, 1);
        }
      }, this.state.tabs[1].title), /*#__PURE__*/_react["default"].createElement("button", {
        className: "tablinks " + this.state.tabs[2].active,
        onClick: function onClick(e) {
          return _this2.switchTab(e, 2);
        }
      }, this.state.tabs[2].title), /*#__PURE__*/_react["default"].createElement("button", {
        className: "tablinks " + this.state.tabs[3].active,
        onClick: function onClick(e) {
          return _this2.switchTab(e, 3);
        }
      }, this.state.tabs[3].title), /*#__PURE__*/_react["default"].createElement("button", {
        className: "tablinks " + this.state.tabs[4].active,
        onClick: function onClick(e) {
          return _this2.switchTab(e, 4);
        }
      }, this.state.tabs[4].title), /*#__PURE__*/_react["default"].createElement("button", {
        className: "tablinks " + this.state.tabs[5].active,
        onClick: function onClick(e) {
          return _this2.switchTab(e, 5);
        }
      }, this.state.tabs[5].title)), /*#__PURE__*/_react["default"].createElement("div", {
        id: "test1",
        className: "tabcontent " + this.state.tabs[0].shown
      }, /*#__PURE__*/_react["default"].createElement("h2", {
        className: "testtitle"
      }, this.state.tabs[0].title), tab1), /*#__PURE__*/_react["default"].createElement("div", {
        id: "test2",
        className: "tabcontent " + this.state.tabs[1].shown
      }, /*#__PURE__*/_react["default"].createElement("h2", {
        className: "testtitle"
      }, this.state.tabs[1].title), tab2), /*#__PURE__*/_react["default"].createElement("div", {
        id: "test3",
        className: "tabcontent " + this.state.tabs[2].shown
      }, /*#__PURE__*/_react["default"].createElement("h2", {
        className: "testtitle"
      }, this.state.tabs[2].title), tab3), /*#__PURE__*/_react["default"].createElement("div", {
        id: "test4",
        className: "tabcontent " + this.state.tabs[3].shown
      }, /*#__PURE__*/_react["default"].createElement("h2", {
        className: "testtitle"
      }, this.state.tabs[3].title), tab4), /*#__PURE__*/_react["default"].createElement("div", {
        id: "test5",
        className: "tabcontent " + this.state.tabs[4].shown
      }, /*#__PURE__*/_react["default"].createElement("h2", {
        className: "testtitle"
      }, this.state.tabs[4].title), tab5), /*#__PURE__*/_react["default"].createElement("div", {
        id: "test6",
        className: "tabcontent " + this.state.tabs[5].shown
      }, /*#__PURE__*/_react["default"].createElement("h2", {
        className: "testtitle"
      }, this.state.tabs[5].title), tab6), /*#__PURE__*/_react["default"].createElement("div", {
        className: "references"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "references-context"
      }, /*#__PURE__*/_react["default"].createElement("h2", null, context)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "references-content"
      }, content))));
    }
  }]);

  return JsAlgorithmDrydock;
}(_react.Component);

var _default = JsAlgorithmDrydock;
exports["default"] = _default;