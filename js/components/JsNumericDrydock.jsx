import React, { Component } from 'react';

import NumericStringExtract from './algorithms/numericstringextract';
import BasicStatisticsTests from './algorithms/basicstatisticstests';
import DataTools from './utils/datatools';

import '../../css/main.css';
import '../../css/verticaltabs.css';

/**
 *
 */
class JsNumericDrydock extends Component {

  /**
   *
   */
  constructor (props) {
  	super(props);

  	this.state={
      tabs: [
	    {
        title: "Test 1 - Extract numeric value from string",
	    	active: "active",
	      shown:"shown"
	    },{
        title: "Test 2 - Basic statistics",
	  	  active: " ",
	      shown: "hidden"
	    },{
        title: "Test 3 - ",
	      active: " ",
        shown: "hidden"
      }]
	  };

    this.dataTools = new DataTools ();
  	this.stringExtract = new NumericStringExtract ();
    this.basicstats = new BasicStatisticsTests ();

  	this.switchTab = this.switchTab.bind (this);
  }

  /**
   *
   */
  switchTab (e,target) {
    console.log ("switchTab ("+target+")");

	  let newTabs= this.dataTools.deepCopy (this.state.tabs);

    for (let i=0;i<newTabs.length;i++) {
      newTabs [i].active="";
      newTabs [i].shown="hidden";

      if (target==i) {
      	newTabs [i].active="active";
      	newTabs [i].shown="shown";
      }
    }

	  this.setState ({
	    tabs: newTabs
	  });
  }

  /**
   *
   */
  generateTest1 () {
  	return (<table className="darkTable">
  	  <thead>
  	    <tr>
  	      <th>Should be Correct/Incorrect</th>
  	      <th>Input</th>
  	      <th>Function</th>
  	      <th>Output</th>  	        	      
  	    </tr>
  	  </thead>
  	  <tbody>
        <tr>
	      <td>Correct</td><td>01az</td><td> extract [0-9a-fA-F]+ </td><td>{this.stringExtract.extract ("01az","[0-9a-fA-F]+")}</td>
	    </tr>  	  
        <tr>
	      <td>Correct</td><td>0x54</td><td> extractHexadecimal </td><td>{this.stringExtract.extractHexadecimal ("0x54")}</td>
	    </tr>
        <tr>
	      <td>Correct</td><td>0x12</td><td> extractHexadecimal </td><td>{this.stringExtract.extractHexadecimal ("0x12")}</td>
	    </tr>
        <tr>
	      <td>Correct</td><td>5400</td><td> extractHexadecimal </td><td>{this.stringExtract.extractHexadecimal ("5400")}</td>
	    </tr>
        <tr>
	      <td>Correct</td><td>abcdefghijklmopqrstuvwxyz</td><td> extractHexadecimal </td><td>{this.stringExtract.extractHexadecimal ("abcdefghijklmopqrstuvwxyz")}</td>
	    </tr>	    	    
        <tr>
	      <td>Correct</td><td>abcdefghijklmopqrstuvwxyz</td><td> extractInteger </td><td>{this.stringExtract.extractInteger ("abcdefghijklmopqrstuvwxyz")}</td>
	    </tr>
        <tr>
	      <td>Correct</td><td>11101001010</td><td> extractBinary </td><td>{this.stringExtract.extractBinary ("11101001010")}</td>
	    </tr>	    
        <tr>
	      <td>Correct</td><td>abcdefghijklmopqrstuvwxyz</td><td> extractBinary </td><td>{this.stringExtract.extractBinary ("abcdefghijklmopqrstuvwxyz")}</td>
	    </tr>	 	    
        <tr>
	      <td>Correct</td><td>5400</td><td> extractInteger </td><td>{this.stringExtract.extractInteger ("5400")}</td>
	    </tr>
        <tr>
	      <td>Correct</td><td>+5400</td><td> extractInteger </td><td>{this.stringExtract.extractInteger ("+5400")}</td>
	    </tr>
        <tr>
	      <td>Correct</td><td>-5400</td><td> extractInteger </td><td>{this.stringExtract.extractInteger ("-5400")}</td>
	    </tr>	    
        <tr>
	      <td>Correct</td><td>5.4</td><td> extractFloat </td><td>{this.stringExtract.extractFloat ("5.4")}</td>
	    </tr>
        <tr>
	      <td>Correct</td><td>-5.4</td><td> extractFloat </td><td>{this.stringExtract.extractFloat ("-5.4")}</td>
	    </tr>	    
        <tr>
	      <td>Correct</td><td>.5</td><td> extractFloat </td><td>{this.stringExtract.extractFloat (".5")}</td>
	    </tr>	    	    	    
        <tr>
	      <td>Correct</td><td>5</td><td> extractFloat </td><td>{this.stringExtract.extractFloat ("5")}</td>
        </tr>
        <tr>
	      <td>Correct</td><td>-5</td><td> extractFloat </td><td>{this.stringExtract.extractFloat ("-5")}</td>
        </tr>        
        <tr>
	      <td>Correct</td><td>abcdefghijklmopqrstuvwxyz</td><td> extractFloat </td><td>{this.stringExtract.extractFloat ("abcdefghijklmopqrstuvwxyz")}</td>
	    </tr>        
  	   </tbody>
  	  </table>);
  }

  /**
   *
   */
  generateTest2 () {
    return (<table className="darkTable">
      <thead>
        <tr>
          <th>Should be Correct/Incorrect</th>
          <th>Input</th>
          <th>Function</th>
          <th>Output</th>                   
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>Correct</td><td>01az</td><td> extract [0-9a-fA-F]+ </td><td>{this.stringExtract.extract ("01az","[0-9a-fA-F]+")}</td>
      </tr>     

      </tbody>
    </table>);
  }
  
  /**
   *
   */
  generateTest3 () {
    return (<table className="darkTable">
      <thead>
        <tr>
          <th>Should be Correct/Incorrect</th>
          <th>Input</th>
          <th>Function</th>
          <th>Output</th>                   
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>Correct</td><td>01az</td><td> extract [0-9a-fA-F]+ </td><td>{this.stringExtract.extract ("01az","[0-9a-fA-F]+")}</td>
      </tr>     

      </tbody>
    </table>);
  }  

  /**
   *
   */
  generateTest4 () {
    return (<table className="darkTable">
      <thead>
        <tr>
          <th>Should be Correct/Incorrect</th>
          <th>Input</th>
          <th>Function</th>
          <th>Output</th>                   
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>Correct</td><td>01az</td><td> extract [0-9a-fA-F]+ </td><td>{this.stringExtract.extract ("01az","[0-9a-fA-F]+")}</td>
      </tr>     

      </tbody>
    </table>);
  }  

  /**
   *
   */
  generateTest5 () {
    return (<table className="darkTable">
      <thead>
        <tr>
          <th>Should be Correct/Incorrect</th>
          <th>Input</th>
          <th>Function</th>
          <th>Output</th>                   
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>Correct</td><td>01az</td><td> extract [0-9a-fA-F]+ </td><td>{this.stringExtract.extract ("01az","[0-9a-fA-F]+")}</td>
      </tr>     

      </tbody>
    </table>);
  }  

  /**
   *
   */
  render () {
  	let tab1=this.generateTest1();
  	let tab2=this.generateTest2();
  	let tab3=this.generateTest3();

  	return (<div className="maincontainer">
      <div className="tab">
	    <button className={"tablinks " + this.state.tabs [0].active} onClick={(e) => this.switchTab(e,0)}>{this.state.tabs [0].title}</button>
	    <button className={"tablinks " + this.state.tabs [1].active} onClick={(e) => this.switchTab(e,1)}>{this.state.tabs [1].title}</button>
	    <button className={"tablinks " + this.state.tabs [2].active} onClick={(e) => this.switchTab(e,2)}>{this.state.tabs [2].title}</button>
	  </div>

	  <div id="test1" className={"tabcontent " + this.state.tabs [0].shown}>
    <h2 className="testtitle">{this.state.tabs [0].title}</h2>
	  {tab1}
	  </div>

	  <div id="test2" className={"tabcontent " + this.state.tabs [1].shown}>
    <h2 className="testtitle">{this.state.tabs [1].title}</h2>  
	  {tab2}
	  </div>

	  <div id="test3" className={"tabcontent " + this.state.tabs [2].shown}>
    <h2 className="testtitle">{this.state.tabs [2].title}</h2>  
	  {tab3}
	  </div>
  	</div>);
  }
}

export default JsNumericDrydock;
