
import OperationsBase from './operationsbase'

/**
 *
 */
class SortOperations extends OperationsBase {

  /**
   * 
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
   * 
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
}

export default SortOperations;
