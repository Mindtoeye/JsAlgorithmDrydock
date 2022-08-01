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
var BasicStatisticsTests = /*#__PURE__*/function () {
  function BasicStatisticsTests() {
    _classCallCheck(this, BasicStatisticsTests);
  }

  _createClass(BasicStatisticsTests, [{
    key: "median",
    value:
    /**
     * The median is the value separating the higher half from the lower half of a data sample 
     * (a population or a probability distribution). For a data set, it may be thought of as the 
     * "middle" value. For example, in the data set [1, 3, 3, 6, 7, 8, 9], the median is 6, the 
     * fourth largest, and also the fourth smallest, number in the sample. For a continuous 
     * probability distribution, the median is the value such that a number is equally likely to 
     * fall above or below it. 
     */
    function median(data) {
      // Nothing to do here
      if (data == null) {
        console.log("Nothing to do here");
        return 0.0;
      } // Avoid divide by zero


      if (data.length == 0) {
        console.log("Data of length zero provided");
        return 0.0;
      }

      return 1;
    }
    /**
    * For a data set, the arithmetic mean, also called the mathematical expectation or average, 
    * is the central value of a discrete set of numbers: specifically, the sum of the values 
    * divided by the number of values. 
    */

  }, {
    key: "mean",
    value: function mean(data) {
      // Nothing to do here
      if (data == null) {
        console.log("Nothing to do here");
        return 0.0;
      } // Avoid divide by zero


      if (data.length == 0) {
        console.log("Data of length zero provided");
        return 0.0;
      }

      var runningCount = 0;

      for (var i = 0; i < data.length; i++) {
        runningCount += data[i];
      }

      return runningCount / data.length;
    }
    /**
     * The mode of a set of data values is the value that appears most often.[1] If X is a 
     * discrete random variable, the mode is the value x (i.e, X = x) at which the probability 
     * mass function takes its maximum value. In other words, it is the value that is most 
     * likely to be sampled.
     */

  }, {
    key: "mode",
    value: function mode(data) {
      // Nothing to do here
      if (data == null) {
        console.log("Nothing to do here");
        return 0.0;
      } // Avoid divide by zero


      if (data.length == 0) {
        console.log("Data of length zero provided");
        return 0.0;
      }

      return 1.0;
    }
    /**
     * In statistics, the range of a set of data is the difference between the largest and 
     * smallest values.[1] Difference here is specific, the range of a set of data is the 
     * result of subtracting the smallest value from largest value.
     */

  }, {
    key: "range",
    value: function range(data) {
      // Nothing to do here
      if (data == null) {
        console.log("Nothing to do here");
        return 0.0;
      } // Avoid divide by zero


      if (data.length == 0) {
        console.log("Data of length zero provided");
        return 0.0;
      }

      var min = data[0];
      var max = data[0];

      for (var i = 1; i < data.length; i++) {
        if (data[i] < min) {
          min = data[i];
        }

        if (data[i] > max) {
          max = data[i];
        }
      }

      var result = {
        min: min,
        max: max
      };
      return result;
    }
  }]);

  return BasicStatisticsTests;
}();

var _default = BasicStatisticsTests;
exports["default"] = _default;