function pasanganTerbesar(num) {
    // you can only write your code here!
    var banding1, banding2, after, terbesar;
    var str = num.toString();
    var i = 0;
    var digit = 2;
    terbesar = Number(str.substr(0, digit));
    while(i < str.length-digit) {
        banding1 = Number(str.substr(i, digit));
        banding2 = Number(str.substr(i+1, digit));
        if(banding1 > banding2) after = banding1;
        else after = banding2;
        if(terbesar < after) terbesar = after;
        i++;
    }
    return terbesar;
  }

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99