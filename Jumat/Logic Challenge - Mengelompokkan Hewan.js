function majuin(animals, i) {
    for(var j = i; j < animals.length - 1; j++) {
        animals[j] = animals[j+1];
    }
    animals.length -= 1;
}
function groupAnimals(animals) {
    // you can only write your code here!
    var baru = [];
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < animals.length; i += 1) {
        if (animals[i - 1][0] > animals[i][0]) {
            done = false;
            var tmp = animals[i - 1];
            animals[i - 1] = animals[i];
            animals[i] = tmp;
            }
        }
    }
    var a = 0;
    var b;
    while(true) {
        if(animals.length == 0) break;
        baru[a] = [animals[0]];
        b = 1;
        for(var i = 1; i < animals.length; i++) {
            if (animals[i][0] == baru[a][b-1][0]) {
                // baru[a].push(animals[i]);
                // animals.splice(i,1);
                baru[a][b] = animals[i];
                majuin(animals, i);
                // console.log(baru[a], animals, animals.length);
                b++;
            }
        }
        majuin(animals, 0);
        // animals.splice(0,1);
        a++;
    }
    return baru;
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]