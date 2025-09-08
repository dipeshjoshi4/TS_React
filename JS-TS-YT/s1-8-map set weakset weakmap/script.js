//----------------------------------------------------------Map Set Weakset Weakmap----------------------------------

"use strict";
console.log("map set weakset weakmap");

//-------------------------------------------------------------------Set-----------------------------------------------------
//- colection of data
//-it contains unique value
//-Object Constructor

// let myArr = [1, 2, 3, 4];
// let obj = new Set(myArr);
// console.log(obj);
// console.log(obj.size);

//For...of Loop
// for (let new1 of obj) {
//   console.log(new1);
// }

//ForEach Loop
// obj.forEach((element) => {
//   console.log(element);
// });

//adding an element
// obj.add(5);
// console.log(obj);
// console.log(obj.size);

//deleting an element
// obj.delete(5);
// console.log(obj);
// console.log(obj.size);

//you can add any value in obj => obj,function,array,string,integer
// var obj1 = { name: "Ajay" };
// obj.add(obj1);
// console.log(obj);

//to check element is in object or not
// console.log(obj.has(5)); //false
// console.log(obj.has(2)); //true

//Delete Whole Object
// obj.clear();
// console.log(obj);

//-------------------------------------------------------------------Map-----------------------------------------------------
//- in Map data store in key and value form and itrate them
//- M should be captial to relize js engine is it Map Object

// let myMap = new Map([
//   ["a1", "Dipesh"],
//   ["a2", "Vijay"],
// ]);
// console.log(myMap);

//add an element
// myMap.set("a3", "dharmik");
// console.log(myMap);

// override the element
// myMap.set("a2", "vikas");
// console.log(myMap);

//get
// console.log(myMap.get("a1"));

//for
// for (let [key, value] of myMap) {
//   console.log(`keys ${key} value ${value}`);
// }

//forEach
// myMap.forEach((key, value) => {
//   console.log(key, value);
// });

//delete
// myMap.delete("a2");
// console.log(myMap);

//clear
// myMap.clear();
// console.log(myMap);

//-------------------------------------------------------------------WeakSet-----------------------------------------------------

//-no iterate
//-only object can store
//-to adding multiple object u have to do for  weaksetname.add("obj") for every object

// let ws = new WeakSet();
// console.log(ws);

//cant add integer value
// ws.add(1);
// console.log(ws);

//let try to add obj
// var ob1 = { name: "dipesh" };
// var ob2 = { name: "kamlesh" };
// ws.add(ob1);
// ws.add(ob2);
// console.log(ws);

//delete
// ws.delete(ob1); //delete

//tocheck
// console.log(ws.has(ob1)); //false

//-------------------------------------------------------------------WeakMap-----------------------------------------------------

// let wm = new WeakMap();

//you can add anything except object
//only obj related activity
//has,add,delete only object

// let wm = new WeakMap([["a1", "dipesh"]]);
// console.log(wm); //invalid use as weak map value

// var ob3 = { name: "dipesh" };
// var ob4 = {};

// wm.set(ob3, "private");
// wm.set(ob4, "extreme");
// console.log(wm);
