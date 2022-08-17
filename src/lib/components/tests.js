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
      input: [["cranberries", "apples", "bananas", "oranges", "grapefruit"],null],
      operation: "sortAZ",
      description: "sort lexically",
      shuffle: true
    },{
      input: [["oranges", "bananas", "apples", "cranberries", "bananas", "oranges", "grapefruit"],null],
      operation: "sortZA",
      description: "sort lexically (reverse)",
      shuffle: true
    },{
      input: [[{"title":"apples"}, {"title":"cranberries"}, {"title":"bananas"}, {"title":"oranges"}, {"title":"grapefruit"}],"title"],
      operation: "sortAZ",
      description: "sort lexically",
      shuffle: true
    },{
      input: [[{"title":"apples"}, {"title":"cranberries"}, {"title":"bananas"}, {"title":"oranges"}, {"title":"grapefruit"}],"title"],
      operation: "sortZA",
      description: "sort lexically (reverse)",
      shuffle: true
    },{
      input: [[100, 5, 399, 3, 1],null],
      operation: "sortNumeric",
      description: "sort numerically",
      shuffle: true
    },{
      input: [[100, 5, 399, 3, 1],null],
      operation: "sortNumericReverse",
      description: "sort numerically (reverse)",
      shuffle: true
    },{
      input: [[{"value":100}, {"value": 5}, {"value": 399}, {"value": 3}, {"value": 1}],"value"],
      operation: "sortNumeric",
      description: "sort numerically",
      shuffle: true
    },{
      input: [[{"value":100}, {"value": 5}, {"value": 399}, {"value": 3}, {"value": 1}],"value"],
      operation: "sortNumericReverse",
      description: "sort numerically (reverse)",
      shuffle: true
    },{
      input: [[100, 5, 399, 3, 1],null],
      operation: "sortInsertion",
      description: "insertion sort",
      shuffle: true
    },{
      input: [[{"value":100}, {"value": 5}, {"value": 399}, {"value": 3}, {"value": 1}],"value"],
      operation: "sortInsertion",
      description: "insertion sort",
      shuffle: true
    },{
      input: [[{"value":100}, {"value": 5}, {"value": 399}, {"value": 3}, {"value": 1}]],
      operation: "shuffle",
      description: "Shuffle an array",
      shuffle: false
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
