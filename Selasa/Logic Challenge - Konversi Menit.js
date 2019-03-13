function konversiMenit(menit) {
    // you can only write your code here!
    var waktu;
    var j,m;
    j = Math.floor(menit / 60);
    m = menit % 60;
    j = j.toString();
    m = m.toString();
    // if (j < 10) {j = "0" + j;}
    if (m < 10) {m = "0" + m;}
    waktu = j + ":" + m;
    return waktu;
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00