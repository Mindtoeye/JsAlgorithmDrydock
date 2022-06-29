
/**
 *
 */
class TestingTools {
   
   /**
    * We wrap every result from an algorithm function into an object so that
    * the diff tool has a consistent structure to work with
    */
   wrapResult (aData) {
     return ({result: aData});
   }
}

export default TestingTools;
