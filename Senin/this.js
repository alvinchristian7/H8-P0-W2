var functionA = function() {
    console.log(this); // global Window object
  }
  
  var sampleObject = {};
  sampleObject.functionB = function() {
    console.log(this); // Object of sampleObject
  }
  
  functionA();
  sampleObject.functionB();