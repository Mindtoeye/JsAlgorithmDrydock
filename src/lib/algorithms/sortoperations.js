
import OperationsBase from './operationsbase'

/**
 * <p>A collection of sort operations. These are very rudimentary and mostly used internally by other
 * methods.</p>
 * 
 * <p>From Wikipedia:</p>
 * 
 * <p>In computer science, a sorting algorithm is an algorithm that puts elements of a list into an order. The most frequently used orders are numerical order and lexicographical order, and either ascending or descending. Efficient sorting is important for optimizing the efficiency of other algorithms (such as search and merge algorithms) that require input data to be in sorted lists. Sorting is also often useful for canonicalizing data and for producing human-readable output.</p>
 * 
 * <p>Formally, the output of any sorting algorithm must satisfy two conditions:</p>
 * 
 * <ul>
 *   <li>The output is in monotonic order (each element is no smaller/larger than the previous element, according to the required order).</li>
 *   <li>The output is a permutation (a reordering, yet retaining all of the original elements) of the input.</li>
 * </ul>
 * 
 * <p>For optimum efficiency, the input data should be stored in a data structure which allows random access rather than one that allows only sequential access. </p>
 * 
 * @class
 */
class SortOperations extends OperationsBase {

  /**
   * A constructor that internally configures the base class. This is part of the internal system that
   * can dynamically add and declare discoverable functionality.
   */
  constructor () {
    super();

    this.setName ("SortOperations");
    this.addOperation ("sortAZ");
    this.addOperation ("sortZA");
    this.addOperation ("sortNumeric");
    this.addOperation ("sortReverse");    
  }

  /**
   * @param {array} aList - A basic Javascript Array. If aSortBy is not specified then the code will sort on the content of the elements
   * @param {string} aSortBy - The name of an attribute on which the array of objects is to be sorted
   */
  sortAZ (aList,aSortBy) {
    console.log ("sortAZ ("+aList.length+","+aSortBy+")");

    if ((aSortBy==null) || (aSortBy==undefined)) {
      aList.sort ((a,b) => {
        return (a.localeCompare(b, 'en', {ignorePunctuation: true}));
      });      
    } else {
      aList.sort ((a,b) => {
        return (a [aSortBy].localeCompare(b [aSortBy], 'en', {ignorePunctuation: true}));
      });
    }

    return (aList);
  }
  
  /**
   * see sort
   */
  sortZA (aList,aSortBy) {
    console.log ("sortZA ("+aList.length+","+aSortBy+")");
 
    let pre=this.sortAZ(aList,aSortBy);

    return (pre.reverse ());
  }

  /**
   * 
   */
  sortNumeric (aList,aSortBy) {
    console.log ("sortNumeric ("+aList.length+","+aSortBy+")");

    if ((aSortBy==null) || (aSortBy==undefined)) {
      aList.sort ((a,b) => {
        return (a-b);
      });      
    } else {
      aList.sort ((a,b) => {
        return (a [aSortBy] - b[aSortBy]);
      });
    }

    return (aList);
  }
  
  /**
   * see sort
   */
  sortNumericReverse (aList,aSortBy) {
    console.log ("sortNumericReverse ("+aList.length+","+aSortBy+")");
 
    let pre=this.sortNumeric(aList,aSortBy);

    return (pre.reverse ());
  }  

  /**
   * 
   */
  sortInsertion (aList,aSortBy) {
    console.log ("sortInsertion ("+aList.length+","+aSortBy+")");

    for (let i=1;i<aList.length;i++) {
      
    }

    return (aList);
  }
}

export default SortOperations;
