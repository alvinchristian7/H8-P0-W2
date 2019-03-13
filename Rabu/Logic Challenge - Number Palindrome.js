function angkaPalindrome(num) {
    // you can only write your code here!
    var balik = [];
    var inc = num;
    
    while(true) {
        inc++;
        i = inc.toString().length-1;
        // j = 0;
        // balik = [];
        balik = "";
        while(i >= 0) {
            // balik[i] = inc.toString()[j];
            // i--;
            // j++;
            balik += inc.toString()[i];
            i--;
        }
        // balik = balik.join("");
        // console.log(balik);
        // if(balik == num.toString()) inc++;
        if(inc.toString().length == 1 || balik == inc.toString()) return inc;
    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001