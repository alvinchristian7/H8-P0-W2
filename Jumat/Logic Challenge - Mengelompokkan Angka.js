function mengelompokkanAngka(arr) {
    // you can only write your code here!
    var deret = [[],[],[]];
    var ulang = arr.length;
    var i = 0;
    // console.log(arr,arr.length);
    while(i < ulang) {
        if(arr[i] % 3 == 0) {
            deret[2].push(arr[i]);
            arr.splice(i,1);
            i = -1;
            // console.log("Kali :",deret,"Skrg :",arr);
        }
        i++;
    }
    i = 0;
    while(i < ulang) {
        if(arr[i] % 2 == 1) {
            deret[1].push(arr[i]);
            arr.splice(i,1);
            i = -1;
            // console.log("Ganjil :",deret,"Skrg :",arr);
        }
        i++;
    }
    i = 0;
    while(i < ulang) {
        if(arr[i] % 2 == 0) {
            deret[0].push(arr[i]);
            arr.splice(i,1);
            i = -1;
            // console.log("Genap :",deret,"Skrg :",arr);
        }
        i++;
    }
    // for(var i = 0; i < arr.length; i++) {
    //     if(arr[i] % 3 == 0) deret[2].push(arr[i]);
    // }
    return deret + "||" + arr.length;
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]