
/**
 *
 */
class BasicStatisticsTests {

  /**
   *
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

    let runningCount=0;
    for (let i=0;i<data.length;i++) {
      runningCount+=data [i];
    }

    return (runningCount/data.length);
  }

  /**
   *
   */
  mode (data) {
    return (1.0);
  }

  /**
   *
   */
  range (data) {
    return ([0,1]);
  }

}

export default BasicStatisticsTests;
