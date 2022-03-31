import React, { Component } from 'react';

import NumericStringExtract from './algorithms/numericstringextract';
import BasicStatisticsTests from './algorithms/basicstatisticstests';
import SetOperations from './algorithms/setoperations';
import SortOperations from './algorithms/sortoperations';

import SetGenerator from './utils/setgenerator';
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
      tab: 0,
      tabs: [
	    {
        title: "Test 1 - Extract numeric value from string",
	    	active: "active",
	      shown:"shown",
        help: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Semper viverra nam libero justo. Vel facilisis volutpat est velit egestas dui id ornare arcu. Magna etiam tempor orci eu lobortis elementum nibh tellus. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Odio euismod lacinia at quis risus sed vulputate odio. Ac odio tempor orci dapibus ultrices in. Urna cursus eget nunc scelerisque. Sed egestas egestas fringilla phasellus faucibus scelerisque. Eget mi proin sed libero enim sed faucibus. Aliquam nulla facilisi cras fermentum odio. Euismod quis viverra nibh cras pulvinar mattis. In iaculis nunc sed augue lacus viverra vitae congue. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Purus ut faucibus pulvinar elementum integer. Risus at ultrices mi tempus imperdiet."
	    },{
        title: "Test 2 - Basic statistics",
	  	  active: " ",
	      shown: "hidden",
        help: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Semper viverra nam libero justo. Vel facilisis volutpat est velit egestas dui id ornare arcu. Magna etiam tempor orci eu lobortis elementum nibh tellus. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Odio euismod lacinia at quis risus sed vulputate odio. Ac odio tempor orci dapibus ultrices in. Urna cursus eget nunc scelerisque. Sed egestas egestas fringilla phasellus faucibus scelerisque. Eget mi proin sed libero enim sed faucibus. Aliquam nulla facilisi cras fermentum odio. Euismod quis viverra nibh cras pulvinar mattis. In iaculis nunc sed augue lacus viverra vitae congue. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Purus ut faucibus pulvinar elementum integer. Risus at ultrices mi tempus imperdiet."
	    },{
        title: "Test 3 - Graph algorithms",
	      active: " ",
        shown: "hidden",
        help: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Semper viverra nam libero justo. Vel facilisis volutpat est velit egestas dui id ornare arcu. Magna etiam tempor orci eu lobortis elementum nibh tellus. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Odio euismod lacinia at quis risus sed vulputate odio. Ac odio tempor orci dapibus ultrices in. Urna cursus eget nunc scelerisque. Sed egestas egestas fringilla phasellus faucibus scelerisque. Eget mi proin sed libero enim sed faucibus. Aliquam nulla facilisi cras fermentum odio. Euismod quis viverra nibh cras pulvinar mattis. In iaculis nunc sed augue lacus viverra vitae congue. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Purus ut faucibus pulvinar elementum integer. Risus at ultrices mi tempus imperdiet."
      },{
        title: "Test 4 - Set operations",
        active: " ",
        shown: "hidden",
        help: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Semper viverra nam libero justo. Vel facilisis volutpat est velit egestas dui id ornare arcu. Magna etiam tempor orci eu lobortis elementum nibh tellus. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Odio euismod lacinia at quis risus sed vulputate odio. Ac odio tempor orci dapibus ultrices in. Urna cursus eget nunc scelerisque. Sed egestas egestas fringilla phasellus faucibus scelerisque. Eget mi proin sed libero enim sed faucibus. Aliquam nulla facilisi cras fermentum odio. Euismod quis viverra nibh cras pulvinar mattis. In iaculis nunc sed augue lacus viverra vitae congue. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Purus ut faucibus pulvinar elementum integer. Risus at ultrices mi tempus imperdiet."
      },{
        title: "Test 5 - Maps, Sets, Trees, Queues, etc",
        active: " ",
        shown: "hidden",
        help: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Semper viverra nam libero justo. Vel facilisis volutpat est velit egestas dui id ornare arcu. Magna etiam tempor orci eu lobortis elementum nibh tellus. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Odio euismod lacinia at quis risus sed vulputate odio. Ac odio tempor orci dapibus ultrices in. Urna cursus eget nunc scelerisque. Sed egestas egestas fringilla phasellus faucibus scelerisque. Eget mi proin sed libero enim sed faucibus. Aliquam nulla facilisi cras fermentum odio. Euismod quis viverra nibh cras pulvinar mattis. In iaculis nunc sed augue lacus viverra vitae congue. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Purus ut faucibus pulvinar elementum integer. Risus at ultrices mi tempus imperdiet."
      },{
        title: "Test 6 - Misc sorting routines",
        active: " ",
        shown: "hidden",
        help: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Semper viverra nam libero justo. Vel facilisis volutpat est velit egestas dui id ornare arcu. Magna etiam tempor orci eu lobortis elementum nibh tellus. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Odio euismod lacinia at quis risus sed vulputate odio. Ac odio tempor orci dapibus ultrices in. Urna cursus eget nunc scelerisque. Sed egestas egestas fringilla phasellus faucibus scelerisque. Eget mi proin sed libero enim sed faucibus. Aliquam nulla facilisi cras fermentum odio. Euismod quis viverra nibh cras pulvinar mattis. In iaculis nunc sed augue lacus viverra vitae congue. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Purus ut faucibus pulvinar elementum integer. Risus at ultrices mi tempus imperdiet."
      }]
	  };

    this.setGenerator = new SetGenerator ();
    this.dataTools = new DataTools ();

  	this.stringExtract = new NumericStringExtract ();
    this.basicStats = new BasicStatisticsTests ();
    this.setOperations = new SetOperations ();
    this.sortOperations = new SortOperations ();

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
      tab: target,
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
    let setFixed=this.setGenerator.generateFixedInt (10,3);
    let setRandom=this.setGenerator.generateRandomInt (10);

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
          <td>Correct</td><td>{JSON.stringify (setFixed)}</td><td> median </td><td>{this.basicStats.mean (setFixed)}</td>
        </tr>
        <tr>
          <td>Correct</td><td>{JSON.stringify (setRandom)}</td><td> median </td><td>{this.basicStats.mean (setRandom)}</td>
        </tr>        
        <tr>
          <td>Correct</td><td>{JSON.stringify (setRandom)}</td><td> range </td><td>{JSON.stringify (this.basicStats.range (setRandom))}</td>
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
    let setRandom1=this.setGenerator.generateRandomInt (10);
    let setRandom2=this.setGenerator.generateRandomInt (10);
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
          <td>Correct</td><td>{JSON.stringify (setRandom1) + ", " + JSON.stringify (setRandom2)}</td><td> and </td><td>{JSON.stringify (this.setOperations.and (setRandom1,setRandom2))}</td>
        </tr>
        <tr>
          <td>Correct</td><td>{JSON.stringify (setRandom1) + ", " + JSON.stringify (setRandom2)}</td><td> or </td><td>{JSON.stringify (this.setOperations.or (setRandom1,setRandom2))}</td>
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
  generateTest6 () {
    let sortInputArray=["apples", "cranberries", "bananas", "oranges", "grapefruit"];
    let sortInputObjects=[{"title":"apples"}, {"title":"cranberries"}, {"title":"bananas"}, {"title":"oranges"}, {"title":"grapefruit"}];

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
          <td>Correct</td><td>{JSON.stringify (sortInputArray)}</td><td> sort lexically </td><td>{JSON.stringify (this.sortOperations.sortAZ (this.dataTools.deepCopy (sortInputArray),null))}</td>
        </tr>     
        <tr>
          <td>Correct</td><td>{JSON.stringify (sortInputArray)}</td><td> sort lexically (reverse) </td><td>{JSON.stringify (this.sortOperations.sortZA (this.dataTools.deepCopy (sortInputArray),null))}</td>
        </tr>     
        <tr>
          <td>Correct</td><td>{JSON.stringify (sortInputObjects)}</td><td> sort lexically </td><td>{JSON.stringify (this.sortOperations.sortAZ (this.dataTools.deepCopy (sortInputObjects),"title"))}</td>
        </tr>     
        <tr>
          <td>Correct</td><td>{JSON.stringify (sortInputObjects)}</td><td> sort lexically (reverse)</td><td>{JSON.stringify (this.sortOperations.sortZA (this.dataTools.deepCopy (sortInputObjects),"title"))}</td>
        </tr>                             

      </tbody>
    </table>);
  }    

  /**
   *
   */
  render () {
    let context=this.state.tabs [this.state.tab].title;
    let content=this.state.tabs [this.state.tab].help;

  	let tab1=this.generateTest1();
  	let tab2=this.generateTest2();
  	let tab3=this.generateTest3();
    let tab4=this.generateTest4();
    let tab5=this.generateTest5();
    let tab6=this.generateTest6();

  	return (<div className="maincontainer">
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

      <div className="references">
        <div className="references-context"><h2>{context}</h2></div>
        <div className="references-content">{content}</div>
      </div>     

  	</div>);
  }
}

export default JsNumericDrydock;
