
//! # Understanding this in JavaScript: Normal vs Arrow Functions (Deep dive into this keyword)

//?main objective of function - to resuse or reuse with different value at different place

//?1. Normal Functions and this:
//In normal functions, the this keyword refers to the object that calls the function, allowing access to the object’s properties.

//?2. Arrow Functions and Lexical this:
//Arrow functions do not have their own this.Instead, they inherit this from their surrounding scope, which means they look to the outer context for this.

//?3. Global Context:
//In a browser environment, the outer context is typically the window object, while in Node.js, it is the global object.

//?4. No this in Arrow Functions:
//Because arrow functions do not have their own this, you cannot use this to access properties within them.

//?Windows vs Global Object

//? Browser :
//- In a browser, the global object is the window object, which contains properties and methods that are globally accessible.
//- varible declare with var will be attached to the window object, making it accessible globally. while those declared with let or const will not be attached to the window object and will not be globally accessible.

//?Node.js:
//- In Node.js, the global object is simply called global, and it serves a similar purpose.
//- Variables declared with var in Node.js will be attached to the global object, while those declared with let or const will not be attached to the global object and will not be globally accessible.


//?questions : arrow function look clean but they always behave same as normal function
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

//?this behaviour in arrow and normal function (IN OBJECT)

// const user = {
//     name: "Dipesh Joshi",
//     greetNormal: function () {
//         console.log("Hello from normal function", this.name);
//     },
// }
// user.greetNormal(); //?Hello from normal function Dipesh Joshi

//?Example-2

// fname = "Don "
// {
//     fname: "Ajay bhai"
// }
// const user2 = {
//     fname: "Dipesh Joshi",
//     greetNormal: () => {
//         console.log("Hello from arrow function", fname);
//     },
// }
// user2.greetNormal(); //?Hello from arrow function Don  (in arrow lexcial scope means here global scope name take)



//?-------------------------------------------------------Extra-----------------------------------------------

//?this behaviour in Arrow and Normal function (WITHOUT OBJECT)

//?Example-1
// var name = "Dipesh Joshi";
// function sayHi() {
//     name = "Hardik Joshi";
//     console.log("Hi from normal function", this.name);
// }
// sayHi()

//?OUTPUT
//- Hi from normal function undefined

//?Explanation
// this in a normal function (non-arrow) depends on how the function is called.
// Since you're calling sayHi() in the global context, in a browser, this refers to the window object.

// var name = "Dipesh Joshi";
// This makes a global variable, and in browsers, var-declared globals also become properties on window:

// window.name === "Dipesh Joshi" // true
// So unless you overwrite it with something like:
// this.name = "Something";
// this.name is "Dipesh Joshi".
// But if you are running this outside a browser(like Node.js), this in a regular function doesn't refer to the global object. Hence, you may see:undefiend



//?Example-2

//?CODE
// var name = "Dipesh Joshi";
// const sayHello = () => {
//     var name = "xyz"
//     console.log("Hi from arrow function", this.name);
// }
// sayHello()

//?OUTPUT
//Hi from arrow function undefiend

//?Explanation
//- Arrow functions do not have their own this.
//- They inherit this from the enclosing scope(also known as lexical scoping).
//- So if the enclosing scope is global(and in a browser), then:
// this === window
// this.name === "Dipesh Joshi"
//- In Node.js, this at the top level is not the global object, so this.name would be undefined.


