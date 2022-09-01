import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faAngleLeft, faAngleRight, faAngleUp, faAngleDown, faSearch, faCalendarCheck, faInfoCircle, faRedo } from '@fortawesome/free-solid-svg-icons'

import NumericStringExtract from '../algorithms/numericstringextract';
import BasicStatisticsTests from '../algorithms/basicstatisticstests';
import SetOperations from '../algorithms/setoperations';
import SortOperations from '../algorithms/sortoperations';
import Hashtable from '../algorithms/hashtable';

import AlgorithmFactory from '../algorithms/algorithmfactory';

import SetGenerator from './utils/setgenerator';
import DataTools from './utils/datatools';
import StringTools from './utils/stringtools';
import TestingTools from './TestingTools';

import { diff } from './treekit/diff';

import { tests } from './tests';

import '../../../css/main.css';
import '../../../css/verticaltabs.css';

const home="docs/docs.html";
const api="docs/api.html";

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
    this.factory = new AlgorithmFactory ();

    let data=this.dataTools.deepCopy (tests);

    let groups=this.prep (data);

    //console.log (groups);

  	this.state={
      tab: -1,
      tabs: data,
      groups: groups,
      showReferences: true,
      apiReference: api,
      home: home
	  };

  	this.stringExtract = new NumericStringExtract ();
    this.basicStats = new BasicStatisticsTests ();
    this.setOperations = new SetOperations ();
    this.sortOperations = new SortOperations ();

    this.goHome = this.goHome.bind (this);
  	this.switchTab = this.switchTab.bind (this);
    this.onShowReferences = this.onShowReferences.bind (this);
    this.onTestClick = this.onTestClick.bind (this);
  }

  /**
   *
   */
  goHome (e) {
    //console.log ("goHome ()");
    this.setState ({
      tab: -1, 
      apiReference: api,
      home: home
    });
  }

  /**
   *
   */
  onTestClick (e,aTestKey) {
    //console.log ("onTestClick ("+aTestKey+")");

    for (let key in this.state.groups) {
      let tabObject=this.state.groups [key];
      let items=tabObject.items;
      for (let j=0;j<items.length;j++) {
        let item=items[j];
        if (item.id==aTestKey) {
          this.setState ({apiReference: item.help});
          return;
        }
      }
    }
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
    //console.log ("prep ()");

    let tabTable=new Hashtable ();
    let index=0;

    for (let j=0;j<data.length;j++) {
      let aTab=data [j];
      if (!aTab.id) {
        aTab.id=this.dataTools.uuidv4 ();
      }

      let testTab=tabTable.getItem (aTab.group);
      if (testTab==null) {
        testTab={};
        testTab.items=[];

        /*
        if (j==0) {
          testTab.active="active";
          testTab.shown="shown";
        } else {
          testTab.active=" ";
          testTab.shown="hidden";
        }
        */

        testTab.active=" ";
        testTab.shown="hidden";        

        testTab.index=index;

        tabTable.setItem (aTab.group,testTab);

        index++;
      }

      testTab.items.push (aTab);
    }

    return (tabTable.getItems ());
  }

  /**
   *
   */
  switchTab (e,target) {
    //console.log ("switchTab ("+target+")");

    let newGroups=this.dataTools.deepCopy (this.state.groups);
    let index=0;

    for (let key in newGroups) {
      let tabObject=newGroups [key];

      tabObject.active="";
      tabObject.shown="hidden";

      if (target==index) {
        tabObject.active="active";
        tabObject.shown="shown";
      }

      index++;
    }

    this.setState ({
      tab: target,
      groups: newGroups
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
  executeTest (test,testObject,anInput) {
    //console.log ("executeTest ()");

    let result={};

    if (test [testObject.operation]) {
      result=test [testObject.operation] (...anInput);
    } else {
      console.log ("Test operation ("+testObject.operation+") does not exist on test object: " + testObject.operation);
    }

    return (result);
  }

  /**
   * 
   */
  generateArgumentList (aList) {
    //console.log (aList);
    let sTools=new StringTools ();    

    let list=[];

    for (let i=0;i<aList.length;i++) {
      list.push (<li key={"key-"+this.dataTools.uuidv4()}>{this.generatePrettyHTML (sTools.syntaxHighlight (aList [i]))}</li>);
    }

    return (<ol className="args">{list}</ol>);
  }

  /**
   * 
   */
  generateTestElements (testObject) {
    //console.log ("generateTestElements ("+testObject.id+")");

    let sTools=new StringTools ();

    let test=this.factory.getObjectInstance (testObject.id);

    if (test==null) {
      return (<table className="darkTable"><tbody><tr><td>Error: unable to create test object from factory</td></tr></tbody></table>);      
    }

    let testResults=[];

    for (let i=0;i<testObject.tests.length;i++) {
      let aTest=testObject.tests [i];

      let input=this.dataTools.deepCopy (aTest.input);
      let shuffleLabel="false";

      if (aTest.hasOwnProperty("shuffle")==true) {
        //console.log ("Test: " + aTest.operation + ", shuffle: " + aTest.shuffle);
        if (aTest.shuffle==true) {
          input[0]=this.sortOperations.shuffle (input[0]);
          shuffleLabel="true";
        }
      }      

      testResults.push(<tr key={"test-" + testObject.id + "-" + i}><td><p className="testlabel">Randomize input: {shuffleLabel}</p>{this.generateArgumentList (input)}</td><td>{aTest.operation}</td><td>{aTest.description}</td><td>{this.generatePrettyHTML (sTools.syntaxHighlight (this.executeTest (test,aTest,input)))}</td></tr>);
    }

    return (<table className="darkTable">
      <thead>
        <tr>
          <th>Input / Arguments</th>
          <th>Function / Variant</th>
          <th>Description</th>            
          <th>Output</th>                   
        </tr>
      </thead>
        <tbody>
        {testResults} 
        </tbody>
    </table>);
  }   

  /**
   * 
   */
  generateTestElement (testObject) {
    //console.log ("generateTestElement ("+testObject.id+")");

    let testtable=this.generateTestElements (testObject);
    return (<div key={"test-"+testObject.id}>
        <div className="test-title-container">
          <FontAwesomeIcon icon={faInfoCircle} size={"2x"} style={{color: "#fbe9b6", paddingRight: "10px", cursor: "pointer"}} onClick={(e) => this.onTestClick (e,testObject.id)}/>
          <div className="testobject">{testObject.title}</div>
        </div>
        {testtable}
    </div>);
  }

  /**
   * 
   */
  generateTabs () {
    //console.log ("generateTabs ()");

    let tabs=[];

    for (let key in this.state.groups) {
      let tabObject=this.state.groups [key];
      let tabElements=[];    
      let items=tabObject.items;

      for (let i=0;i<items.length;i++) {
        let testTable=this.generateTestElement (items [i]);
        tabElements.push (testTable);
      }

      tabs.push (<div key={"tabelement-"+tabObject.index} id={"test1"+tabObject.index} className={"tabcontent " + tabObject.shown}>
        <h1 className="testtitle">{key}</h1>
        {tabElements}
      </div>);
    }

    return (tabs);
  }

  /**
   *
   */
  generateTabTitles () {
    //console.log ("generateTabTitles ()");

    let tabTitleElements=[];
    for (let key in this.state.groups) {
      let tabObject=this.state.groups [key];
      tabTitleElements.push (<button key={"tab-button-"+tabObject.index} className={"tablinks " + tabObject.active} onClick={(e) => this.switchTab(e,tabObject.index)}>{key}</button>);      
    }    

    return (tabTitleElements);
  }

  /**
   *
   */
  render () {
    let tabtitles;
    let tabs;
    let references;
    let apiReference=this.state.apiReference;

    tabtitles=this.generateTabTitles ();

    if (this.state.tab==-1) {
      tabs=<div className="tabcontainer-empty"><iframe width="100%" height="100%" frameBorder="0" src={this.state.home}></iframe></div>;
    } else {
      tabs=this.generateTabs (); 
    }

    if (this.state.showReferences==true) {      
      references=<div className="references"><div className="references-collapser" onClick={(e) => this.onShowReferences(e)}><FontAwesomeIcon icon={faAngleRight} size={"2x"} /></div><div className="references-context"><iframe width="100%" height="100%" frameBorder="0" src={apiReference}></iframe></div></div>;
    } else {
      references=<div className="references-collapsed"><div className="references-collapser" onClick={(e) => this.onShowReferences(e)}><FontAwesomeIcon icon={faAngleLeft} size={"2x"} /></div></div>;
    }

  	return (      
      <div className="maincontainer">
        <div className="maintitleheader">
          <div className="maintitleheader-icon">
            <FontAwesomeIcon icon={faHome} size={"2x"} onClick={(e) => this.goHome (e)} />
          </div>
          <h1>Knossys Algorithm Drydock</h1>
        </div>
        <div className="tabcontainer">
          <div className="tab">
            {tabtitles}
    	    </div>

          {tabs}

          {references}

        </div>
  	</div>);
  }
}

export default JsAlgorithmDrydock;
