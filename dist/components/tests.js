"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tests = void 0;
var tests = [{
  title: "Test 1 - Extract numeric value from string",
  help: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Semper viverra nam libero justo. Vel facilisis volutpat est velit egestas dui id ornare arcu. Magna etiam tempor orci eu lobortis elementum nibh tellus. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Odio euismod lacinia at quis risus sed vulputate odio. Ac odio tempor orci dapibus ultrices in. Urna cursus eget nunc scelerisque. Sed egestas egestas fringilla phasellus faucibus scelerisque. Eget mi proin sed libero enim sed faucibus. Aliquam nulla facilisi cras fermentum odio. Euismod quis viverra nibh cras pulvinar mattis. In iaculis nunc sed augue lacus viverra vitae congue. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Purus ut faucibus pulvinar elementum integer. Risus at ultrices mi tempus imperdiet.",
  tests: [{
    input: {
      arg1: "01az"
    },
    operation: "extract",
    description: "extract [0-9a-fA-F]+",
    output: ["01az"]
  }]
}, {
  title: "Test 2 - Basic statistics",
  help: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Semper viverra nam libero justo. Vel facilisis volutpat est velit egestas dui id ornare arcu. Magna etiam tempor orci eu lobortis elementum nibh tellus. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Odio euismod lacinia at quis risus sed vulputate odio. Ac odio tempor orci dapibus ultrices in. Urna cursus eget nunc scelerisque. Sed egestas egestas fringilla phasellus faucibus scelerisque. Eget mi proin sed libero enim sed faucibus. Aliquam nulla facilisi cras fermentum odio. Euismod quis viverra nibh cras pulvinar mattis. In iaculis nunc sed augue lacus viverra vitae congue. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Purus ut faucibus pulvinar elementum integer. Risus at ultrices mi tempus imperdiet.",
  tests: []
}, {
  title: "Test 3 - Graph algorithms",
  help: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Semper viverra nam libero justo. Vel facilisis volutpat est velit egestas dui id ornare arcu. Magna etiam tempor orci eu lobortis elementum nibh tellus. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Odio euismod lacinia at quis risus sed vulputate odio. Ac odio tempor orci dapibus ultrices in. Urna cursus eget nunc scelerisque. Sed egestas egestas fringilla phasellus faucibus scelerisque. Eget mi proin sed libero enim sed faucibus. Aliquam nulla facilisi cras fermentum odio. Euismod quis viverra nibh cras pulvinar mattis. In iaculis nunc sed augue lacus viverra vitae congue. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Purus ut faucibus pulvinar elementum integer. Risus at ultrices mi tempus imperdiet.",
  tests: []
}, {
  title: "Test 4 - Set operations",
  help: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Semper viverra nam libero justo. Vel facilisis volutpat est velit egestas dui id ornare arcu. Magna etiam tempor orci eu lobortis elementum nibh tellus. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Odio euismod lacinia at quis risus sed vulputate odio. Ac odio tempor orci dapibus ultrices in. Urna cursus eget nunc scelerisque. Sed egestas egestas fringilla phasellus faucibus scelerisque. Eget mi proin sed libero enim sed faucibus. Aliquam nulla facilisi cras fermentum odio. Euismod quis viverra nibh cras pulvinar mattis. In iaculis nunc sed augue lacus viverra vitae congue. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Purus ut faucibus pulvinar elementum integer. Risus at ultrices mi tempus imperdiet.",
  tests: []
}, {
  title: "Test 5 - Maps, Sets, Trees, Queues, etc",
  help: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Semper viverra nam libero justo. Vel facilisis volutpat est velit egestas dui id ornare arcu. Magna etiam tempor orci eu lobortis elementum nibh tellus. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Odio euismod lacinia at quis risus sed vulputate odio. Ac odio tempor orci dapibus ultrices in. Urna cursus eget nunc scelerisque. Sed egestas egestas fringilla phasellus faucibus scelerisque. Eget mi proin sed libero enim sed faucibus. Aliquam nulla facilisi cras fermentum odio. Euismod quis viverra nibh cras pulvinar mattis. In iaculis nunc sed augue lacus viverra vitae congue. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Purus ut faucibus pulvinar elementum integer. Risus at ultrices mi tempus imperdiet.",
  tests: []
}, {
  title: "Test 6 - Misc sorting routines",
  help: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Semper viverra nam libero justo. Vel facilisis volutpat est velit egestas dui id ornare arcu. Magna etiam tempor orci eu lobortis elementum nibh tellus. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Odio euismod lacinia at quis risus sed vulputate odio. Ac odio tempor orci dapibus ultrices in. Urna cursus eget nunc scelerisque. Sed egestas egestas fringilla phasellus faucibus scelerisque. Eget mi proin sed libero enim sed faucibus. Aliquam nulla facilisi cras fermentum odio. Euismod quis viverra nibh cras pulvinar mattis. In iaculis nunc sed augue lacus viverra vitae congue. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Purus ut faucibus pulvinar elementum integer. Risus at ultrices mi tempus imperdiet.",
  tests: []
}];
exports.tests = tests;