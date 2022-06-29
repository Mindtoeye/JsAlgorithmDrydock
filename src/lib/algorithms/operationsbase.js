
/**
 *
 */
class OperationsBase {

  /**
   * 
   */
  constructor() {
    this.name="base";
    this.operations=[];
  }

  /**
   * 
   */
  setName (aName) {
    this.name=aName;
  }

  /**
   * 
   */
  getName () {
    return (this.name);
  }

  /**
   * 
   */
  addOperation (aName) {
    this.operations.push (aName);
  }
}

export default OperationsBase;
