var example = "Example"
console.log(typeof(example));
var functionA = function() {
  var example = "Aceh";
  console.log(example + " in A = " + typeof(example));
  var functionB = function() {
    var example = "Bantul";
    console.log(example + " in B = " +  typeof(example)); // it's possible
    
  };
  functionB();
};
functionA();