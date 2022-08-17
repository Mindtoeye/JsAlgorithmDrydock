import OperationsBase from './operationsbase'

/**
 *
 */
class SetOperations extends OperationsBase {

  /**
   * Can we do this in one iteration, e.g. t = N
   * Bug: this algorithm fails with more than 2 of the same element
   */
  unique (aSet) {
    //console.log ("unique ("+JSON.stringify (aSet)+")");

    let result=[];
    let clean=false;

    while (aSet.length>0) {
      let target=aSet [0];
      result.push (target);      
      aSet.splice (0,1);

      // Remove any copies we find further down
      for (let i=0;i<aSet.length;i++) {
        if (aSet [i]==target) {
          aSet.splice(i,1);            
        }
      }
    }

    return (result);
  }

  /**
   * t = N^M
   */
  and (set1,set2, makeUnique) {
    let result=[];
    for (let i =0;i<set1.length;i++) {
      let testValue=set1 [i];
      for (let j=0;j<set2.length;j++) {
        if (set2 [j]==testValue) {
          result.push (testValue);
        }
      }
    }

    if (makeUnique) {
      if (makeUnique==true) {
        return (this.unique (result));
      }
    }

    return (result);
  }

  /**
  * t = N + M
   */
  or (set1,set2, makeUnique) {
    let result=[];

    for (let i =0;i<set1.length;i++) {
      result.push (set1 [i]);
    }

    for (let i =0;i<set2.length;i++) {
      result.push (set2 [i]);
    }    

    if (makeUnique) {
      if (makeUnique==true) {
        return (this.unique (result));
      }
    }

    return (result);
  }
}

export default SetOperations;
