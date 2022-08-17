import OperationsBase from './operationsbase'

/**
 *
 */
class SetOperations extends OperationsBase {

  /**
   * Can we do this in one iteration?
   * @description This method takes a set and randomizes their order. Note that it returns
   * a new set.
   * @param aSet
   */
  unique (aSet) {
    let result=[];
    
    while (aSet.length>0) {
      // The element we're investigating is always the first one
      let target=aSet [0];
      result.push (target);      
      aSet.splice (0,1);

      let clean=false;
      while (clean==false) {
        clean=true;
        // Remove any copies we find further down. Right now this
        // loop is called too many times. Not sure how we can use
        // splice while updating it in a loop as well
        for (let i=0;i<aSet.length;i++) {
          if (aSet [i]==target) {
            aSet.splice(i,1);
            clean=false;
            break;
          }
        }        
      }
    }

    return (result);
  }

  /**
   * Operation: Intersection
   * Notation: A ∩ B
   * 
   * @description All elements which are in both set a and set 2
   */
  and (set1, set2, makeUnique) {
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
   * Operation: Union
   * Notation: A ∪ B
   * 
   * @description All elements which are in either set 1 or set B (or both)
   */
  or (set1, set2, makeUnique) {
    let result=[];

    for (let i=0;i<set1.length;i++) {
      result.push (set1 [i]);
    }

    for (let i=0;i<set2.length;i++) {
      result.push (set2 [i]);
    }    

    if (makeUnique) {
      if (makeUnique==true) {
        return (this.unique (result));
      }
    }

    return (result);
  }

  /**
   * Operation: Subtraction/Difference
   * Notation: A − B
   * 
   * @description All elements which are in set 1 but not in set 2
   */
  difference (set1, set2, makeUnique) {
    let result=[];

    for (let i=0;i<set1.length;i++) {
      let found=false;
      for (let j=0;j<set2.length;j++) {
        if (set2 [j]==set1 [i]) {
          found=true;
        }
      }
      if (found==false) {
        result.push (set1 [i]);
      }
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
