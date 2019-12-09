
/**
 *
 */
class SetGenerator {

  /**
   *
   */
  generateFixedInt (length,value) {
  	let data=[];
  	for (let i=0;i<length;i++) {
  	  data.push(value);
  	}

  	return (data);
  }

  /**
   *
   */
  generateRandomInt (length) {
  	let data=[];
  	for (let i=0;i<length;i++) {
  	  data.push(Math.floor(Math.random() * 10));
  	}

  	return (data);
  }  
}

export default SetGenerator;
