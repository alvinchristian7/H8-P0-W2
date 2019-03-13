function balikKata(kata) {
    // you can only write your code here!
    var balik = "";
    for(var i = kata.length - 1; i >= 0; i--) {
        balik += kata[i];
    }
    return balik;
  }

  console.log(balikKata("hello world!"));
