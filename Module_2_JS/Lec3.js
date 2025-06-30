
//?Var

//var is hoisted to the top of the function or global scope but its initialization is not hoisted
// This means that the variable is available before its declaration
// console.log(a);
// var a = 10;
// console.log(a);

//?Let and Const

// try {
//     console.log(b) // ReferenceError: Cannot access 'b' before initialization
// } catch (e) {
//     console.error(e)
// }
// let b = 20;
// console.log(b); // 20

//? Normal function

// greet(); // Hello Love
// function greet() {
//     console.log("Hello Love")
// }
// greet(); //Hello Love

///- both time working because it can access in m.c.p and function will be store as key value pair in memory

//? function expression with var

// sayHello(); // TypeError: sayHello is not a function
// var sayHello =function() {
//     console.log("Hello World")
// }

//- This will throw an error because sayHello is not defined yet  sayHello is a function expression and not hoisted
//- Function expressions are not hoisted, so they cannot be called before they are defined
//- This means that the function is not available before its declaration

//? function expression with let
/*
try {
    sayHello(); // TypeError: sayHello is not a function
} catch (e) {
    console.error(e)
}
let sayHello = function () {
    console.log("Hello World")
}
*/
