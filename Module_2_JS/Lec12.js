//! Array Mastery: Must-Know Methods
// | find()
// | findIndex()
// | map()
// | filter() 
// | join() 
// | split()
// | reduce()

const users = [
    { id: 1, name: "John Doe", age: 28, price: 100 },
    { id: 2, name: "Emma Stone", age: 22, price: 200 },
    { id: 3, name: "Max", age: 19, price: 300 },
    { id: 4, name: "Oliva Smith", age: 31, price: 500 }
]

//?-----------------------------reduce:----------------------------
//- Reduces the array to a single value by applying a function cumulatively

//?Example-1
// const total = users.reduce((sum, user) => sum + user.price, 0);
// console.log(total);
//?OUTPUT-1100

//?Explanation
// - here loop run like this at start it sum value is 0 then
// - first item came 0+100 = 100 and sume value is 100
// - second item came 100+200 = 300 and sume value is 300
// - third item came 300+300 = 600 and sume value is 600
// - fourth item came 600+500 = 1100 and sum value is 1100(final answer)

//?----------------------------find()----------------------------
//- Returns the first element that satisfies a condition.(or undefined if not found)

//?Example-1
// const name = users.find(user => user.age > 20);
// console.log(name);
//?OUTPUT
// { id: 1, name: "John Doe", age: 28 },

//?----------------------------FindIndex()----------------------------
//Returns the index of the first element that satisfies a condition.(or -1 if not found)

//?Example-1
// const nameIndex = users.findIndex(user => user.age > 20);
// console.log(nameIndex);
//OUTPUT - 0

//?Example-2
// const nameIndex2 = users.findIndex(user => user.name === "Emma Stone");
// console.log(nameIndex2);
//OUTPUT - 1

//?Example-3
// const nameIndex3 = users.findIndex(user => user.name === "GRACY");
// console.log(nameIndex3);
//OUTPUT = -1


//?map()
//- Applies a function to each element and returns a new array.
//- create a new array by applying a function to each elements

//?Example-1
// const names = users.map((users) => {
//     return users.name
// });
// console.log(names);

//?Example-2
// const upperCaseNames = users.map((users) => {
//     return users.name.toUpperCase();
// });
// console.log(upperCaseNames); //?OUTPUT-["JOHN DOE","EMMA STONE","MAX","OLIVA SMITH"]

//?----------------------------SHORT-HAND FOR MAP----------------------------
// console.log(users.map(user => user.name.toUpperCase()));

//? ----------------------------filter:----------------------------
//- Selects elements based on a condition and returns a new array.
//- reatur a new array with only elements that pass the conditions
//- anything you want to filter from array and get new array

// const age = users.filter(user => user.age > 20);
// console.log(age);
//?OUTPUT
// [
//     { id: 1, name: "John Doe", age: 28 },
//     { id: 2, name: "Emma Stone", age: 22 },
//     { id: 4, name: "Oliva Smith", age: 31 }
// ]

//?----------------------------Method Chaining----------------------------

//?Example-1 use of map and filter

// const result = users.filter(user => user.age > 20).map(user => user.name.toUpperCase());
// console.log(result);
//?OUTPUT
//["JOHN DOE","EMMA STONE","OLIVA SMITH"]

//?----------------------------join()----------------------------
//- Joins all elements of an array into a single string.
//- Convert all array elements into a single stream with given separator

//?Example-1
// const names = users.map(user => user.name.toUpperCase());
// const nameString = names.join(",");
// console.log(nameString);
//?OUTPUT
// JOHN DOE,EMMA STONE,MAX,OLIVA SMITH]

// //?Example-2- map,filter and join
// const nameArray = users.filter(user => user.age > 20).map(user => user.name.toUpperCase()).join(",");
// console.log(nameArray);
//?OUTPUT
//JOHN DOE, EMMA STONE, OLIVA SMITH

//?----------------------------split()----------------------------
//- Splits a string into an array of substrings.

//?Example-1
// const names = users.map(user => user.name.toUpperCase());
// const nameString = names.join(",");
// const nameArray = nameString.split(",");
// console.log(nameArray);
//?OUTPUT
// ["JOHN DOE","EMMA STONE","MAX","OLIVA SMITH"]














