console.log("Spread & Rest Operator in ES6");

//-------------------------------------------Spread & Rest Operator in ES6---------------------------------------------------
//1.difference between spread and rest
//2.both use in array and object

//-------------------------------------------Rest Operator------------------------------------------------------------

//------------------------------------------Normal Function
// function addNumbers(a, b, c) {
//   return a + b + c;
// }
// const result = addNumbers(2, 5, 6);
// console.log(result);

//---------------------------------------Rest Operator => ES6

// function addNumbers(a, b, c, ...other) {
//   console.log(other);
//   console.log(other[0]);
//   return a + b + c;
// }
// const res = addNumbers(2, 5, 6, 8, 9);
// console.log(res);

/*
Notes
 console.log(other);=>  rest operator gives array form of data with other value(8,9)
 console.log(other[0]); =>we can find the indvidaul number from other's value with their index
*/

//---------------------------------------Rest Operator => ES5
// function addNumbers(a, b, c, ...other) {
//   console.log(arguments);  //array get with all value then u can perform ur any performance
//   return a + b + c;
// }
// const res = addNumbers(2, 5, 6, 8, 9,10,15,1);
// console.log(res);

//-------------------------------------------Spread Operator ------------------------------------------------------------

//------------------------------------NORMAL FUNCTION

// var names = ["ajay", "anuj", "vivek"];

// function getNames(name1, name2, name3) {
//   console.log(name1, name2, name3);
// }

// NORMAL FUNCTION
// getNames(names[0], names[1], names[2]); //ajay anuj vivek

//Spread Operator
// getNames(...names); //ajay anuj vivek

//in array combined form Output
// getNames(names); //(3) ['ajay','anuj','vivek']

//----------------------------------------------Object Example rest and spread---------------------------------

// const students = {
//   names: "ajay",
//   age: "28",
//   hobbies: ["cricket", "singing"],
// };

//Normal
/*
const age = students.age;
console.log(age);
*/

//ES6 Destructring
/*
const { age, names, hobbies } = students;
console.log(rest);
console.log(names);
console.log(hobbies);
*/

//rest Operator

/*1 way
const { age, ...rest } = students;
console.log(rest); //Expect the age ,name and hobbies are handle with this
*/

/*2nd way
const { ...rest } = students;
console.log(rest); //all things handle and print
*/

//spread Operator with that update the value in object
const newStudents = {
  ...students,
  age: 29,
};
console.log(newStudents); //here all value will be same of old object Expect age .which has been updated
