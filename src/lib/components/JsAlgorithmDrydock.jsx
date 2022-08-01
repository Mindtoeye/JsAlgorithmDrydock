import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faAngleUp, faAngleDown, faSearch, faCalendarCheck, faInfoCircle, faRedo } from '@fortawesome/free-solid-svg-icons'

import NumericStringExtract from '../algorithms/numericstringextract';
import BasicStatisticsTests from '../algorithms/basicstatisticstests';
import SetOperations from '../algorithms/setoperations';
import SortOperations from '../algorithms/sortoperations';

import SetGenerator from './utils/setgenerator';
import DataTools from './utils/datatools';
import StringTools from './utils/stringtools';
import TestingTools from './TestingTools';

import { diff } from './treekit/diff';

import { tests } from './tests';

import '../../../css/main.css';
import '../../../css/verticaltabs.css';

/**
 *
 */
class JsAlgorithmDrydock extends Component {

  /**
   *
   */
  constructor (props) {
  	super(props);

    this.setGenerator = new SetGenerator ();
    this.dataTools = new DataTools ();
    this.stringTools = new StringTools ();

    let data=this.dataTools.deepCopy (tests);

    this.prep (data);

  	this.state={
      tab: 0,
      tabs: data,
      showReferences: true
	  };

  	this.stringExtract = new NumericStringExtract ();
    this.basicStats = new BasicStatisticsTests ();
    this.setOperations = new SetOperations ();
    this.sortOperations = new SortOperations ();

  	this.switchTab = this.switchTab.bind (this);

    this.onShowReferences = this.onShowReferences.bind (this);
  }

  /**
   *
   */
  onShowReferences (e) {
    let showRef=this.state.showReferences;
    this.setState ({showReferences: !showRef});
  }

  /**
   *
   */
  prep (data) {
    console.log ("prep ()");

    let result=diff (data,tests);

    console.log (result);

    for (let i=0;i<data.length;i++) {
      let entry=data[i];
      if (i==0) {
        entry.active="active";
        entry.shown="shown";
      } else {
        entry.active=" ";
        entry.shown="hidden";
      }
    }
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
      tab: target,
	    tabs: newTabs
	  });
  }

  /**
   * 
   */
  generatePrettyHTML (aData) {
    return (<div className="test-codeblock"><pre dangerouslySetInnerHTML={{ __html: aData }}></pre></div>);
  }

  /**
   *
   */
  generateTest1 () {
  	return (<table className="darkTable">
  	  <thead>
  	    <tr>
  	      <th>Evaluation</th>
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
   * Statistics
   */
  generateTest2 () {
    let setFixed=this.setGenerator.generateFixedInt (10,3);
    let setRandom=this.setGenerator.generateRandomInt (10);

    return (<table className="darkTable">
      <thead>
        <tr>
          <th>Evaluation</th>
          <th>Input</th>
          <th>Function</th>
          <th>Output</th>                   
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Correct</td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (setFixed))}</td><td> median </td><td>{this.basicStats.mean (setFixed)}</td>
        </tr>
        <tr>
          <td>Correct</td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (setRandom))}</td><td> median </td><td>{this.basicStats.mean (setRandom)}</td>
        </tr>        
        <tr>
          <td>Correct</td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (setRandom))}</td><td> range </td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (this.basicStats.range (setRandom)))}</td>
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
          <th>Evaluation</th>
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
   * Set Operations
   */
  generateTest4 () {
    let setRandom1=this.setGenerator.generateRandomInt (10);
    let setRandom2=this.setGenerator.generateRandomInt (10);
    let setRandom3=this.setGenerator.generateRandomInt (20);
    return (<table className="darkTable">
      <thead>
        <tr>
          <th>Evaluation</th>
          <th>Input</th>
          <th>Function</th>
          <th>Output</th>                   
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Correct</td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (setRandom3))}</td><td> unique </td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (this.setOperations.unique (setRandom3)))}</td>
        </tr>      
        <tr>
          <td>Correct</td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (setRandom1))}{" "}{this.generatePrettyHTML (this.stringTools.syntaxHighlight (setRandom2))}</td><td> and (not unique)</td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (this.setOperations.and (setRandom1,setRandom2,false)))}</td>
        </tr>
        <tr>
          <td>Correct</td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (setRandom1))}{" "}{this.generatePrettyHTML (this.stringTools.syntaxHighlight (setRandom2))}</td><td> and (unique)</td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (this.setOperations.and (setRandom1,setRandom2,true)))}</td>
        </tr>        
        <tr>
          <td>Correct</td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (setRandom1))}{" "}{this.generatePrettyHTML (this.stringTools.syntaxHighlight (setRandom2))}</td><td> or (not unique)</td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (this.setOperations.or (setRandom1,setRandom2,false)))}</td>
        </tr>
        <tr>
          <td>Correct</td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (setRandom1))}{" "}{this.generatePrettyHTML (this.stringTools.syntaxHighlight (setRandom2))}</td><td> or (unique)</td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (this.setOperations.or (setRandom1,setRandom2,true)))}</td>
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
          <th>Evaluation</th>
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
   * Sorting methods
   */
  generateTest6 () {
    let sortInputArray=["apples", "cranberries", "bananas", "oranges", "grapefruit"];
    let sortInputObjects=[{"title":"apples"}, {"title":"cranberries"}, {"title":"bananas"}, {"title":"oranges"}, {"title":"grapefruit"}];
    let sortInputArrayNumbers=[100, 5, 399, 3, 1];
    let sortInputObjectsNumbers=[{"value":100}, {"value": 5}, {"value": 399}, {"value": 3}, {"value": 1}];

    return (<table className="darkTable">
      <thead>
        <tr>
          <th>Evaluation</th>
          <th>Input</th>
          <th>Function / Variant</th>
          <th>Output</th>                   
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="test-heading" colSpan="4">Builtin Javascript lexical sorting</td>
        </tr>

        <tr>
          <td>Correct</td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (sortInputArray))}</td><td> sort lexically </td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (this.sortOperations.sortAZ (this.dataTools.deepCopy (sortInputArray),null)))}</td>
        </tr>     
        <tr>
          <td>Correct</td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (sortInputArray))}</td><td> sort lexically (reverse) </td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (this.sortOperations.sortZA (this.dataTools.deepCopy (sortInputArray),null)))}</td>
        </tr>     
        <tr>
          <td>Correct</td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (sortInputObjects))}</td><td> sort lexically </td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (this.sortOperations.sortAZ (this.dataTools.deepCopy (sortInputObjects),"title")))}</td>
        </tr>     
        <tr>
          <td>Correct</td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (sortInputObjects))}</td><td> sort lexically (reverse)</td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (this.sortOperations.sortZA (this.dataTools.deepCopy (sortInputObjects),"title")))}</td>
        </tr>

        <tr>
          <td className="test-heading" colSpan="4">Builtin Javascript numeric sorting</td>
        </tr>

        <tr>
          <td>Correct</td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (sortInputArrayNumbers))}</td><td> sort numerically </td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (this.sortOperations.sortNumeric (this.dataTools.deepCopy (sortInputArrayNumbers),null)))}</td>
        </tr>     
        <tr>
          <td>Correct</td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (sortInputArrayNumbers))}</td><td> sort numerically (reverse) </td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (this.sortOperations.sortNumericReverse (this.dataTools.deepCopy (sortInputArrayNumbers),null)))}</td>
        </tr>     
        <tr>
          <td>Correct</td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (sortInputObjectsNumbers))}</td><td> sort numerically </td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (this.sortOperations.sortNumeric (this.dataTools.deepCopy (sortInputObjectsNumbers),"value")))}</td>
        </tr>     
        <tr>
          <td>Correct</td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (sortInputObjectsNumbers))}</td><td> sort numerically (reverse)</td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (this.sortOperations.sortNumericReverse (this.dataTools.deepCopy (sortInputObjectsNumbers),"value")))}</td>
        </tr>

        <tr>
          <td className="test-heading" colSpan="4">Insertion Sort</td>
        </tr>

        <tr>
          <td>Correct</td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (sortInputArrayNumbers))}</td><td> insertion sort</td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (this.sortOperations.sortInsertion (this.dataTools.deepCopy (sortInputArrayNumbers),null)))}</td>
        </tr>
        <tr>
          <td>Correct</td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (sortInputObjectsNumbers))}</td><td> insertion sort</td><td>{this.generatePrettyHTML (this.stringTools.syntaxHighlight (this.sortOperations.sortInsertion (this.dataTools.deepCopy (sortInputObjectsNumbers),"value")))}</td>
        </tr>

      </tbody>
    </table>);
  }    

  /**
   *
   */
  render () {
    let references;
    let context=this.state.tabs [this.state.tab].title;
    let content=this.state.tabs [this.state.tab].help;

  	let tab1=this.generateTest1();
  	let tab2=this.generateTest2();
  	let tab3=this.generateTest3();
    let tab4=this.generateTest4();
    let tab5=this.generateTest5();
    let tab6=this.generateTest6();

    if (this.state.showReferences==true) {
      references=<div className="references"><div className="references-collapser" onClick={(e) => this.onShowReferences(e)}><FontAwesomeIcon icon={faAngleRight} size={"2x"} /></div><div className="references-context"><h2>{context}</h2></div><div className="references-content">{content}</div></div>;
    } else {
      references=<div className="references-collapsed"><div className="references-collapser" onClick={(e) => this.onShowReferences(e)}><FontAwesomeIcon icon={faAngleLeft} size={"2x"} /></div></div>;
    }

  	return (      
      <div className="maincontainer">
        <div className="maintitleheader">
          <h1>Knossys Algorithm Drydock</h1>
        </div>
        <div className="tabcontainer">
          <div className="tab">
    	      <button className={"tablinks " + this.state.tabs [0].active} onClick={(e) => this.switchTab(e,0)}>{this.state.tabs [0].title}</button>
    	      <button className={"tablinks " + this.state.tabs [1].active} onClick={(e) => this.switchTab(e,1)}>{this.state.tabs [1].title}</button>
    	      <button className={"tablinks " + this.state.tabs [2].active} onClick={(e) => this.switchTab(e,2)}>{this.state.tabs [2].title}</button>
            <button className={"tablinks " + this.state.tabs [3].active} onClick={(e) => this.switchTab(e,3)}>{this.state.tabs [3].title}</button>
            <button className={"tablinks " + this.state.tabs [4].active} onClick={(e) => this.switchTab(e,4)}>{this.state.tabs [4].title}</button>
            <button className={"tablinks " + this.state.tabs [5].active} onClick={(e) => this.switchTab(e,5)}>{this.state.tabs [5].title}</button>        
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

          <div id="test4" className={"tabcontent " + this.state.tabs [3].shown}>
            <h2 className="testtitle">{this.state.tabs [3].title}</h2>  
            {tab4}
          </div>

          <div id="test5" className={"tabcontent " + this.state.tabs [4].shown}>
            <h2 className="testtitle">{this.state.tabs [4].title}</h2>  
            {tab5}
          </div>

          <div id="test6" className={"tabcontent " + this.state.tabs [5].shown}>
            <h2 className="testtitle">{this.state.tabs [5].title}</h2>  
            {tab6}
          </div>

          {references}

        </div>
  	</div>);
  }
}

export default JsAlgorithmDrydock;
