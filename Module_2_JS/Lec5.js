
//! # Understanding this in JavaScript: Normal vs Arrow Functions (Deep dive into this keyword)

//? Lecture Summary 🚀

// 1. Normal Functions and this: In normal functions, the this keyword refers to the object that calls the function, allowing access to the object’s properties.

// 2. Arrow Functions and Lexical this: Arrow functions do not have their own this.Instead, they inherit this from their surrounding scope, which means they look to the outer context for this.

// 3. Global Context: In a browser environment, the outer context is typically the window object, while in Node.js, it is the global object.

// 4. No this in Arrow Functions: Because arrow functions do not have their own this, you cannot use this to access properties within them.

//?Windows vs Global Object

//? Browser :
// In a browser, the global object is the window object, which contains properties and methods that are globally accessible.
//varible declare with var will be attached to the window object, making it accessible globally. while those declared with let or const will not be attached to the window object and will not be globally accessible.

//?Node.js:
// In Node.js, the global object is simply called global, and it serves a similar purpose.
// Variables declared with var in Node.js will be attached to the global object, while those declared with let or const will not be attached to the global object and will not be globally accessible.


//?questions : arrow function look clean but they always behave same as normal function
//Answer:
// Arrow functions do not behave the same as normal functions when it comes to the this keyword.
// They inherit this from their surrounding context, while normal functions have their own this based on how they are called.
// This means that in arrow functions, you cannot use this to access properties of the object that calls the function, which is a key difference from normal functions.

//? Question : how does normal function behave inside arrow function
// Answer:
// Inside an arrow function, a normal function will still behave as it normally does.
// If you call a normal function within an arrow function, the this context of the normal function will depend on how it is called. If it is called as a method of an object, this will refer to that object.
// If it is called in the global context, this will refer to the global object (window in browsers, global in Node.js).

//?Normal Function
// function greet() {
//     console.log("Hello Normal")
// }
// greet(); //Hello Normal

//?Arrow Function
// const greetArrow = () => {
//     console.log("Hello Arrow")
// }
// greetArrow(); //Hello Arrow

//?shorter Arrow Function
// const greetShort = () => console.log("Hello Short Arrow");
// greetShort(); //Hello Short Arrow

// const greetWithName = () => "dipesh joshi";  //here in syntax return is not required
// var Arrowname = greetWithName();
// console.log(Arrowname); //dipesh joshi

//?this behaviour in arrow and normal function (WITHOUT OBJECT)


//? Normal function

var name = "Dipesh Joshi";

// function sayHi() {
//     var name = "Hardik Joshi";
//     console.log("Hi from normal function", this.name);
// }
// sayHi()

//?OUTPUT
//Hi from normal function undefined
// In a browser, this.name refers to the global object (window), which does not have a name property.

//? Arrow function
// const sayHello = () => {
//     console.log("Hi from arrow function", name);
// }
// sayHello()

//?OUTPUT
//Hi from arrow function Dipesh joshi
//In an arrow function, this does not refer to the global object. Instead, it inherits the this value from its surrounding context, which in this case is the global scope where name is defined.

//?this behaviour in arrow and normal function (IN OBJECT)

// const user = {
//     name: "Dipesh Joshi",
//     greetNormal: function () {
//         console.log("Hello from normal function", this.name);
//     },
// }
// user.greetNormal(); //Hello from normal function Dipesh Joshi

// var fname = "ajay bhai"
// const user2 = {
//     name: "Dipesh Joshi",
//     greetNormal: () => {
//         console.log("Hello from arrow function", fname);
//     },
// }
// user2.greetNormal(); //Hello from arrow function ajay bhai

