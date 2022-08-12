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

    console.log (groups);

  	this.state={
      tab: -1,
      tabs: data,
      groups: groups,
      showReferences: true,
      apiReference: home
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
    this.setState ({tab: -1,apiReference: home});
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
    console.log ("prep ()");

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

        if (j==0) {
          testTab.active="active";
          testTab.shown="shown";
        } else {
          testTab.active=" ";
          testTab.shown="hidden";
        }

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
   * Sorting methods
   */
  generateSortingTest (testObject) {
    let sTools=new StringTools ();

    //let test=new SortOperations ();
    let test=this.factory.getObjectInstance (testObject.id);

    if (test==null) {
      return (<tbody><tr><td>Error: unable to create test object from factory</td></tr></tbody>);      
    }

    let sortInputArray=["apples", "cranberries", "bananas", "oranges", "grapefruit"];
    let sortInputObjects=[{"title":"apples"}, {"title":"cranberries"}, {"title":"bananas"}, {"title":"oranges"}, {"title":"grapefruit"}];
    let sortInputArrayNumbers=[100, 5, 399, 3, 1];
    let sortInputObjectsNumbers=[{"value":100}, {"value": 5}, {"value": 399}, {"value": 3}, {"value": 1}];

    return (
      <tbody>
        <tr>
          <td>Correct</td><td>{this.generatePrettyHTML (sTools.syntaxHighlight (sortInputArray))}</td><td> sort lexically </td><td>{this.generatePrettyHTML (sTools.syntaxHighlight (test.sortAZ (sortInputArray,null)))}</td>
        </tr>     
        <tr>
          <td>Correct</td><td>{this.generatePrettyHTML (sTools.syntaxHighlight (sortInputArray))}</td><td> sort lexically (reverse) </td><td>{this.generatePrettyHTML (sTools.syntaxHighlight (test.sortZA (sortInputArray,null)))}</td>
        </tr>     
        <tr>
          <td>Correct</td><td>{this.generatePrettyHTML (sTools.syntaxHighlight (sortInputObjects))}</td><td> sort lexically </td><td>{this.generatePrettyHTML (sTools.syntaxHighlight (test.sortAZ (sortInputObjects,"title")))}</td>
        </tr>     
        <tr>
          <td>Correct</td><td>{this.generatePrettyHTML (sTools.syntaxHighlight (sortInputObjects))}</td><td> sort lexically (reverse)</td><td>{this.generatePrettyHTML (sTools.syntaxHighlight (test.sortZA (sortInputObjects,"title")))}</td>
        </tr>
      </tbody>);
  }   

  /**
   * 
   */
  generateTest (testObject) {
    let test;

    test=this.generateSortingTest (testObject);

    return (<table className="darkTable">
        <thead>
          <tr>
            <th>Evaluation</th>
            <th>Input</th>
            <th>Function / Variant</th>
            <th>Output</th>                   
          </tr>
        </thead>
        {test}
      </table>);
  }

  /**
   * 
   */
  generateTestElement (testObject) {
    let testtable=this.generateTest (testObject);
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
      tabs=<div className="tabcontainer-empty">Knossys Algorithm Drydock</div>;
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
