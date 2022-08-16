const tests=[
  {
    title: "Strings",
    id: "numericstringextract",
    help: "docs/NumericStringExtract.html",
    tests: [{
      input: ["01az"],
      operation: "extract",
      description: "extract [0-9a-fA-F]+"
    },{
      input: ["01az"],
      operation: "extract",
      description: "extract [0-9a-fA-F]+"
    }],
    group: "Misc"
  },{
    title: "Basic statistics",
    id: "basicstatisticstests",
    help: "docs/BasicStatisticsTests.html",
    tests: [],
    group: "Statistics"
  },{
    title: "Graph algorithms",
    help: "docs/GraphOperations.html",
    tests: [],
    group: "Graphs"
  },{
    title: "Set operations",
    id: "setoperations",
    help: "docs/SetOperations.html",
    tests: [],
    group: "Sets"
  },{
    title: "Queues, Stacks, etc",
    help: "docs/QueueStackOperations.html",
    tests: [],
    group: "Collections"
  },{
    title: "Sorting routines",
    id: "sortoperations",
    help: "docs/SortOperations.html",
    tests: [{
      input: [["apples", "cranberries", "bananas", "oranges", "grapefruit"],null],
      operation: "sortAZ",
      description: "sort lexically"
    },{
      input: [["apples", "cranberries", "bananas", "oranges", "grapefruit"],null],
      operation: "sortZA",
      description: "sort lexically (reverse)"
    },{
      input: [[{"title":"apples"}, {"title":"cranberries"}, {"title":"bananas"}, {"title":"oranges"}, {"title":"grapefruit"}],"title"],
      operation: "sortAZ",
      description: "sort lexically"
    },{
      input: [[{"title":"apples"}, {"title":"cranberries"}, {"title":"bananas"}, {"title":"oranges"}, {"title":"grapefruit"}],"title"],
      operation: "sortZA",
      description: "sort lexically (reverse)"
    },{
      input: [[100, 5, 399, 3, 1],null],
      operation: "sortNumeric",
      description: "sort numerically"
    },{
      input: [[100, 5, 399, 3, 1],null],
      operation: "sortNumericReverse",
      description: "sort numerically (reverse)"
    },{
      input: [[{"value":100}, {"value": 5}, {"value": 399}, {"value": 3}, {"value": 1}],"value"],
      operation: "sortNumeric",
      description: "sort numerically"
    },{
      input: [[{"value":100}, {"value": 5}, {"value": 399}, {"value": 3}, {"value": 1}],"value"],
      operation: "sortNumericReverse",
      description: "sort numerically (reverse)"
    },{
      input: [[100, 5, 399, 3, 1],null],
      operation: "sortInsertion",
      description: "insertion sort"
    },{
      input: [[{"value":100}, {"value": 5}, {"value": 399}, {"value": 3}, {"value": 1}],"value"],
      operation: "sortInsertion",
      description: "insertion sort"
    }],
    group: "Sorting"
  },{
    title: "Hash functions",
    help: "docs/Hashtable.html",
    tests: [],
    group: "Collections"
  }
]

export { tests };
