
/**
 *
 */
class BasicStatisticsTests {

  /**
   * The median is the value separating the higher half from the lower half of a data sample 
   * (a population or a probability distribution). For a data set, it may be thought of as the 
   * "middle" value. For example, in the data set [1, 3, 3, 6, 7, 8, 9], the median is 6, the 
   * fourth largest, and also the fourth smallest, number in the sample. For a continuous 
   * probability distribution, the median is the value such that a number is equally likely to 
   * fall above or below it. 
   */
  median (data) {
    // Nothing to do here
    if (data==null) {
      console.log ("Nothing to do here");
      return (0.0);
    }

    // Avoid divide by zero
    if (data.length==0) {
      console.log ("Data of length zero provided");
      return (0.0);
    }
  
    return (1);
  }

  /**
  * For a data set, the arithmetic mean, also called the mathematical expectation or average, 
  * is the central value of a discrete set of numbers: specifically, the sum of the values 
  * divided by the number of values. 
  */
  mean (data) {
    // Nothing to do here
    if (data==null) {
      console.log ("Nothing to do here");
      return (0.0);
    }

    // Avoid divide by zero
    if (data.length==0) {
      console.log ("Data of length zero provided");
      return (0.0);
    }

    let runningCount=0;
    for (let i=0;i<data.length;i++) {
      runningCount+=data [i];
    }

    return (runningCount/data.length);    
  }

  /**
   * The mode of a set of data values is the value that appears most often.[1] If X is a 
   * discrete random variable, the mode is the value x (i.e, X = x) at which the probability 
   * mass function takes its maximum value. In other words, it is the value that is most 
   * likely to be sampled.
   */
  mode (data) {
    // Nothing to do here
    if (data==null) {
      console.log ("Nothing to do here");
      return (0.0);
    }

    // Avoid divide by zero
    if (data.length==0) {
      console.log ("Data of length zero provided");
      return (0.0);
    }
        
    return (1.0);
  }

  /**
   * In statistics, the range of a set of data is the difference between the largest and 
   * smallest values.[1] Difference here is specific, the range of a set of data is the 
   * result of subtracting the smallest value from largest value.
   */
  range (data) {
    // Nothing to do here
    if (data==null) {
      console.log ("Nothing to do here");
      return (0.0);
    }

    // Avoid divide by zero
    if (data.length==0) {
      console.log ("Data of length zero provided");
      return (0.0);
    }

    let min=data [0];
    let max=data [0];

    for (let i=1;i<data.length;i++) {
      if (data[i]<min) {
        min=data[i];
      }

      if (data [i]>max) {
        max=data[i];
      }
    }

    let result={min: min, max: max};

    return (result);
  }
}

export default BasicStatisticsTests;
