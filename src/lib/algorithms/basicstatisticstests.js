
/**
  <p>Via Wikipedia:</p>

  <p>A statistic (singular) or sample statistic is any quantity computed from values in a sample which is considered for a statistical purpose. Statistical purposes include estimating a population parameter, describing a sample, or evaluating a hypothesis. The average (or mean) of sample values is a statistic. The term statistic is used both for the function and for the value of the function on a given sample. When a statistic is being used for a specific purpose, it may be referred to by a name indicating its purpose.</p>

  <p>When a statistic is used for estimating a population parameter, the statistic is called an estimator. A population parameter is any characteristic of a population under study, but when it is not feasible to directly measure the value of a population parameter, statistical methods are used to infer the likely value of the parameter on the basis of a statistic computed from a sample taken from the population. For example, the sample mean is an unbiased estimator of the population mean. This means that the expected value of the sample mean equals the true population mean.</p>

  <p>A descriptive statistic is used to summarize the sample data. A test statistic is used in statistical hypothesis testing. Note that a single statistic can be used for multiple purposes – for example the sample mean can be used to estimate the population mean, to describe a sample data set, or to test a hypothesis.
  Contents</p>

  <p>Some examples of statistics are:</p>

  <p><i>"In a recent survey of Americans, 52% of Republicans say global warming is happening."</i></p>

  <p>In this case, "52%" is a statistic, namely the percentage of Republicans in the survey sample who believe in global warming. The population is the set of all Republicans in the United States, and the population parameter being estimated is the percentage of all Republicans in the United States, not just those surveyed, who believe in global warming.</p>

  <p><i>"The manager of a large hotel located near Disney World indicated that 20 selected guests had a mean length of stay equal to 5.6 days."</i></p>

  <p>In this example, "5.6 days" is a statistic, namely the mean length of stay for our sample of 20 hotel guests. The population is the set of all guests of this hotel, and the population parameter being estimated is the mean length of stay for all guests.[2] Note that whether the estimator is unbiased in this case depends upon the sample selection process; see the inspection paradox.</p>

  <p>There are a variety of functions that are used to calculate statistics. Some include:</p>

  <ul>
    <li>Sample mean, sample median, and sample mode</li>
    <li>Sample variance and sample standard deviation</li>
    <li>Sample quantiles besides the median, e.g., quartiles and percentiles</li>
    <li>Test statistics, such as t-statistic, chi-squared statistic, f statistic</li>
    <li>Order statistics, including sample maximum and minimum</li>
    <li>Sample moments and functions thereof, including kurtosis and skewness</li>
    <li>Various functionals of the empirical distribution function</li>
  </ul>
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
