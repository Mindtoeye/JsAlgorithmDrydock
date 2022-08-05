const tests=[
  {
    title: "Test 1 - Extract numeric value from string",
    help: "docs/index.html",
    tests: [{
      input: { arg1: "01az"},
      operation: "extract",
      description: "extract [0-9a-fA-F]+",
      output: ["01az"]
    }]
  },{
    title: "Test 2 - Basic statistics",
    help: "docs/index.html",
    tests: []
  },{
    title: "Test 3 - Graph algorithms",
    help: "docs/index.html",
    tests: []
  },{
    title: "Test 4 - Set operations",
    help: "docs/index.html",
    tests: []
  },{
    title: "Test 5 - Maps, Sets, Trees, Queues, etc",
    help: "docs/index.html",
    tests: []
  },{
    title: "Test 6 - Sorting routines",
    help: "docs/SortOperations.html",
    tests: []
  }
]

export { tests };
