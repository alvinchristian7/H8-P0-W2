function fpb(angka1, angka2) {
    // you can only write your code here!
    var a = [];
    var b = [];
    for(var i = 1; i <= angka1; i++) {
        if(angka1 % i == 0) a.push(i)
    }
    for(var i = 1; i <= angka2; i++) {
        if(angka2 % i == 0) b.push(i)
    }
    // console.log("A :",a,"\nB :",b);
    for(var i = a.length - 1; i >= 0; i--) {
        for(var j = b.length - 1; j >= 0; j--) {
            if(a[i] == b[j]) return a[i];
        }
    }
    return "Gak ada bang";
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1