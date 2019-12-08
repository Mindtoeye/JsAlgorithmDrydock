
/**
 *
 */
class NumericStringExtract {

  /**
   *
   */
  extract (str, pattern) {
    return ((str.match(pattern) || []).pop() || '');
  }

  /**
   *
   */
  extractHexadecimal (str) {
    let result=this.extract(str, "0x[0-9a-fA-F]+");

    if (result=="") {
      return ("00");
    }
    
    return (result);    
  }

  /**
   *
   */
  extractBinary (str) {
  	let result=this.extract(str, "^[0-1]*$");
  	if (result=="") {
  	  return ("0");
  	}
    return (result);
  }  

  /**
   *
   */
  extractInteger (str) {
  	let result=this.extract(str, "^[-+]?[0-9]*$");
  	if (result=="") {
  		return ("0");
  	}
    return (result);
  }

  /**
   * https://www.regular-expressions.info/floatingpoint.html
   */
  extractFloat (str) {
  	let result=this.extract(str, "^[-+]?[0-9]*\.?[0-9]+$");
  	if (result=="") {
  		return ("0.0");
  	}
    return (result);
  }
}

export default NumericStringExtract;
