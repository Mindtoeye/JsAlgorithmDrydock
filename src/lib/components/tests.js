const tests=[
  {
    title: "Extract numeric value from string",
    help: "docs/NumericStringExtract.html",
    tests: [{
      input: { arg1: "01az"},
      operation: "extract",
      description: "extract [0-9a-fA-F]+",
      output: ["01az"]
    }]
  },{
    title: "Basic statistics",
    help: "docs/BasicStatisticsTests.html",
    tests: []
  },{
    title: "Graph algorithms",
    help: "docs/GraphOperations.html",
    tests: []
  },{
    title: "Set operations",
    help: "docs/SetOperations.html",
    tests: []
  },{
    title: "Queues, Stacks, etc",
    help: "docs/QueueStackOperations.html",
    tests: []
  },{
    title: "Sorting routines",
    help: "docs/SortOperations.html",
    tests: []
  },{
    title: "Hash functions",
    help: "docs/Hashtable.html",
    tests: []
  }
]

export { tests };
