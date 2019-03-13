function groupAnimals(animals) {
    // you can only write your code here!
    var baru = [];
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < animals.length; i += 1) {
        if (animals[i - 1] > animals[i]) {
            done = false;
            var tmp = animals[i - 1];
            animals[i - 1] = animals[i];
            animals[i] = tmp;
            }
        }
    }
    var b = 0;
    while(true) {
        if(animals.length == 0) break;
        baru[b] = [animals[0]];
        for(var i = 1; i < animals.length; i++) {
            if (animals[i][0] == animals[0][0]) {
                baru[b].push(animals[i]);
                animals.splice(i,1);
            }
        }
        animals.splice(0,1);
        b++;
    }
    return baru;
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]