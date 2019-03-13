function palindrome(kata) {
    // you can only write your code here!
    // var balik = [];
    var balik = "";
    var i = kata.length-1;
    // var j = 0;
    while(i >= 0) {
        // balik[i] = kata[j];
        // balik += kata[j];
        balik += kata[i];
        i--;
        // j++;
    }
    // console.log(balik);
    // balik = balik.join("");
    // console.log(balik);
    if(balik == kata) return true;
    else return false;
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false