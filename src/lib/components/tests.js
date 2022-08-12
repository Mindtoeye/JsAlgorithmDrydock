const tests=[
  {
    title: "Strings",
    id: "numericstringextract",
    help: "docs/NumericStringExtract.html",
    tests: [{
      input: { arg1: "01az"},
      operation: "extract",
      description: "extract [0-9a-fA-F]+",
      output: ["01az"]
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
    tests: [],
    group: "Sorting"
  },{
    title: "Hash functions",
    help: "docs/Hashtable.html",
    tests: [],
    group: "Collections"
  }
]

export { tests };
