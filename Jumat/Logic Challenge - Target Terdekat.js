function targetTerdekat(arr) {
    // you can only write your code here!
    var jarak = 0;
    var awal;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == "o" || arr[i] == "x") {
            awal = arr[i];
            // console.log(awal);
            break;
        }
    }
    for(var j = i + 1; j < arr.length; j++) {
        if(arr[j] == awal) jarak = 0;
        if(arr[j] != " " && arr[j] != awal) {
            return jarak + 1;
        }
        if(arr[j] == " ") jarak++;
        // console.log("Kedua",jarak);
    }
    return 0;
  }
  
  // TEST CASES
  console.log("Jarak :",targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log("Jarak :",targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log("Jarak :",targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log("Jarak :",targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log("Jarak :",targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2