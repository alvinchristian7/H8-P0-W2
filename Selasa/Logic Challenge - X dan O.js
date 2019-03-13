function xo(str) {
    // you can only write your code here!
    var i = j = 0;
    for(var k = 0; k < str.length; k++) {
        if(str[k] == "x") i++;
        else j++;
    }
    if(i == j) return true;
    else return false;
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true