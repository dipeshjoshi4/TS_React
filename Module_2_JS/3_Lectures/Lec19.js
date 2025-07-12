// 28
//! 19.Set and map

// both store data
// iterables DS
// use in Logic

//?Set:
// a built in js objects that store only unique values and remove duplicates automatically
// A collection of unique values(no duplicates allowed).
// Maintains insertion order.
// Iterable, so you can loop through each value.

//?Map:
// Stores key - value pairs.
// Maintains insertion order of keys.
// Keys are unique (it can be any dataType), but values can be duplicate. Insertion order be preserved
// its given in array

//?Iterable,:- so you can loop through each key - value pair and destructure them as needed.

//?set
/*

const myset = new Set()

//?Adding in set
myset.add(10);
myset.add(20);
myset.add(30);

//?check is there in set
console.log(myset.has(10)); //?true

//?for delete from set
myset.delete(10);

//?print the set
console.log(myset); //?set(2) {20,30}

//?find the size of set
console.log(myset.size); //?2

//?Adding in set
myset.add(40);
myset.add(50);

//?iterate from each element of set
for (let val of myset) {
    console.log(val)
}
//?20 30 40 50

//?no duplicate in set
const tags = ["html", "css", "js", "react", "js"];
const uniqueTags = new Set(tags);
console.log(uniqueTags); //?Set(4) {"html","css","js","react"}

*/

//?Map

const map = new Map();
map.set("name", "Ajay");
map.set("age", 28);

//?get value as per key
console.log(map.get('name')); //?Ajay

//?print the map
console.log(map); //?Map(2) {'name' => 'Ajay','age' => 28}

//?take ssize
console.log(map.size) //?2

//?to check 
console.log(map.has('name'));//?true

//?For delete
// map.delete('name');

//?iterate
for (let [key, value] of map) {
    console.log(key, value)
}
//? name ajay
//? age 28

//?no duplicated key and order preserved
const userScores = new Map();
userScores.set("Ajay", 87);
userScores.set("Ram", 97);
userScores.set("Ajay", 67);
console.log(userScores); //?Map(2) {"Ajay" => 67,"Ram" => 97}