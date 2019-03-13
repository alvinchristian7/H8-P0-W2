var animals = ["Lion", "Tiger", "Puma"]
console.log(animals);
console.log(animals[0]);
console.log(animals[3] = "Jaguar");
console.log(animals[8] = "Leopard");
console.log(animals[1] = undefined);
console.log(animals);
console.log(animals[5]);
console.log(animals[0] = 100);
console.log(animals[1] = true);
console.log(animals);
console.log(animals[3] = ["Zero", 1, "Two"]);
console.log(animals[3][3] = "Three");
var animals = [["Lion"], ["Tiger", "Puma"]];
console.log(JSON.stringify(animals));
console.log(animals[0]);

var animalsArray = ["lion", "horse"];
animalsArray.push("duck"); // menambahkan 1 nilai ke array bagian paling belakang
console.log(animalsArray); // ["lion", "horse", "duck"]
animalsArray.pop(); // menghapus 1 nilai array terbelakang
console.log(animalsArray); // ["lion", "horse"]
animalsArray.unshift("dog");
console.log(animalsArray); // ["dog", "lion", "horse"]
animalsArray.shift();
console.log(animalsArray);  // ["lion", "horse"]
animalsArray.sort();
console.log(animalsArray);  // ["horse", "lion"]
console.log(animalsArray.join(" and ")); // "horse and lion"

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fru = fruits.slice(1,3);
console.log(fruits + "\n" + fru);
console.log(fruits.splice(2, 0, "Lemon", "Kiwi"));
console.log(fruits);
var str = "How are you doing today?";
var res = str.split(" ");
console.log(res);

var arr = [1, 2, 15, 13];
arr.sort();
console.log(arr); // 1, 15, 2
function buzz() { if(5) console.log("AUUU AH");}
console.log(buzz());
var a;
a += 8;
console.log(a,typeof(a));

var title = 'Your Name';
// mengambil huruf pertama dari string
console.log(title[0]); // 'Y'

// mengambil huruf terakhir dari string. Apa itu length? Penjelasan .length di section selanjutnya :)
console.log(title[-1]); // 'e'

// "memaksa" perubahan nilai di posisi 0
title[0] = 'T';
console.log(title);