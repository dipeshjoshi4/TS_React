//!18. Prototype & Inheritence in JS

//?Prototypes and __proto__ Property:
//Every JavaScript object has a hidden __proto__ property that points to its prototype.This prototype object can have its own __proto__, forming a prototype chain.

//?Object.create() Method:
//This method creates a new object with the specified prototype object.It allows you to directly set the prototype of the new object.

//?Traditional Inheritance Using Constructor Functions:
//Before ES6, inheritance was achieved using constructor functions.A constructor function is a regular function used with the new keyword.Methods shared by all instances are attached to the constructor’s prototype.

//?Modern Inheritance Using ES6 Classes:
//With ES6, JavaScript introduced the class syntax, providing a more intuitive and cleaner way to implement inheritance.Classes internally still use prototypes but offer a more straightforward syntax

//?For Example

// const arr = [1, 2, 3];
// console.log(arr.map((item) => item + 1));//?OUTPUT-[2,3,4]

//- from where we get this map .so it comes from array prototype

//- if
// console.log(arr.sayHello()); //?OUTPUT - sayHello() is not a function

//- so here sayHello() is find in prototype but could not met and error comes

//? let add sayHello() in array Prototype

// const arr = [1, 2, 3];
// Array.prototype.sayHello = function () {
//     return "Say Hello!!!!";
// };
// console.log(arr.sayHello()); //?OUTPUT-Say Hello!!!

//- so here we make sayHello() in Array.prototype to check is there or not we can simply write

//console.log(arr.__proto__) //?OUTPUT - we can see in browser console array proto had sayHello() and that's Why we get Answer

//? Prototype chaining
// => Array =>Array.prototype => Object.prototype => null

//- so js first check in file your method then check in array prototype.so how we can add the method in array prototype ?

//? find last element of array

// const arr = [1, 2, 3];
// Array.prototype.last = function () {
//     console.log(this);                    //? Gives Array
//     return this[this.length - 1];
// }
// console.log(arr.last()); //?OUTPUT - 3

//?When the constructor not have and we have to make object prototype

//- this below Person() work as constructor(special function) means when the object create the constructor execute by getting value

// function Person(name) {
//     this.name = name;
// }
// Person.prototype.greet = function () {
//     return ` Hello ${this.name}`;
// }
// const user = new Person("Ajay");
// console.log(user.greet()) //?OUTPUT - Hello Ajay

//? Using Object.create() for in heritance

