
/**
 *
 */
class SortOperations {

  /**
   * A function that defines a sort order. The function should return a negative, zero, or positive value, depending on the arguments:
   *
   *   function(a, b){return a-b}
   *
   * When sort() compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
   * 
   * Example:
   * 
   * var arr = ["bananas", "cranberries", "apples"];
   * 
   * arr.sort(function(a, b) {
   *   return a.localeCompare(b);
   * });
   * 
   * console.log(arr); // [ "apples", "bananas", "cranberries" ]
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
   * A function that defines a sort order. The function should return a negative, zero, or positive value, depending on the arguments:
   *
   *   function(a, b){return a-b}
   *
   * When sort() compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
   * 
   * Example:
   * 
   * var arr = ["bananas", "cranberries", "apples"];
   * 
   * arr.sort(function(a, b) {
   *   return a.localeCompare(b);
   * });
   * 
   * console.log(arr); // [ "apples", "bananas", "cranberries" ]
   */
  sortZA (aList,aSortBy) {
    console.log ("sortZA ("+aList.length+","+aSortBy+")");

    if ((aSortBy==null) || (aSortBy==undefined)) {
      aList.reverse ((a,b) => {
        return (a.localeCompare(b, 'en', {ignorePunctuation: true}));
      });      
    } else {
      aList.reverse ((a,b) => {
        return (a [aSortBy].localeCompare(b [aSortBy], 'en', {ignorePunctuation: true}));
      });
    }

    return (aList);
  }
}

export default SortOperations;
