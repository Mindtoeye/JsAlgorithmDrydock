
import SortOperations from './sortoperations';
import SetOperations from './setoperations';
import NumericStringExtract from './numericstringextract';
import BasicStatisticsTests from './basicstatisticstests';

/**
 *
 */
class AlgorithmFactory {

  /**
   * 
   */
  getClassListing () {
  	return (["sortoperations","setoperations","numericstringextract","basicstatisticstests"]);
  }

  /**
   * 
   */
  getObjectInstance (anAlgorithmName) {
   	//console.log ("getObjectInstance ("+anAlgorithmName+")");

    if (anAlgorithmName=="sortoperations") {
      return (new SortOperations ());
    }

    if (anAlgorithmName=="setoperations") {
      return (new SetOperations ());
    }

    if (anAlgorithmName=="numericstringextract") {
      return (new NumericStringExtract ());
    }

    if (anAlgorithmName=="basicstatisticstests") {
      return (new BasicStatisticsTests ());
    }               

    return (null);
  }
}

export default AlgorithmFactory;
