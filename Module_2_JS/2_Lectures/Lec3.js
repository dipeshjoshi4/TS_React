
//! Hoisting

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

/*
sayHello(); //? TypeError: sayHello is not a function
var sayHello = function () {
    console.log("Hello World")
}
*/


//?💡 Now, why TypeError, not just undefined ?
// Because you're not just accessing the variable (sayHello) —you’re trying to invoke it:
// sayHello();
// This means: call the value stored in sayHello But sayHello is undefined at that moment.
// undefined();
// ❌ This throws → TypeError: because undefined is not a function

//- This will throw an error because sayHello is not defined yet  sayHello is a function expression and not hoisted
//- Function expressions are not hoisted, so they cannot be called before they are defined
//- This means that the function is not available before its declaration

//? function expression with let

// try {
//     sayHello(); //? ReferenceError: can not access "sayHello" before initialization
// } catch (e) {
//     console.error(e)
// }
// let sayHello = function () {
//     console.log("Hello World")
// }

//?How let behaves (TDZ explained):
// When you declare a variable with let or const:
// The variable is hoisted (yes — it's hoisted just like var).But it's not initialized.
// It goes into a special zone called the Temporal Dead Zone — from the start of the block to the line where it’s actually declared.

/*

First, what is hoisting?
Hoisting means JavaScript moves declarations to the top of the scope before the code runs.
So even if your variable or function is declared at the bottom, JavaScript knows about it from the start.

📦 Now, two steps in hoisting:
Declaration hoisting — JS remembers the variable name.
Initialization — JS assigns an initial value (like undefined or the actual function).

✅ var — hoisted and initialized:
//?
console.log(a); // 👉 undefined (no error)
var a = 10;
//?

Behind the scenes:
//?
var a;           // declaration + initialized to undefined (hoisted)
console.log(a); // undefined
a = 10;
//?
✅ So a exists and has a value (undefined) even before line 2 runs.

🚫 let / const — hoisted but NOT initialized:
//?
console.log(b); // ❌ ReferenceError
let b = 20;
//?

Behind the scenes:
//?
JS knows 'b' exists (hoisted declaration)
TDZ starts here ❗
console.log(b); // ❌ Error! b is known but not yet initialized
let b = 20; // initialized here ✅
//?

So:“Hoisted but not initialized” means:
👉 JavaScript knows the variable exists
❌ But you can't use it — it's in the Temporal Dead Zone (TDZ)
✅ Only after the declaration line is executed does it get a value.

🔁 Summary

Feature	                    var	                               let / const

Hoisted	                    ✅ Yes	                         ✅ Yes
Initialized before use	    ✅ Yes (undefined)	             ❌ No (TDZ)
Access before declaration	✅ Works (value is undefined)	 ❌ ReferenceError



*/

//?with LET VARIABLE AND ANONYMOUS FUNCTION

// console.log(a)
// let a = 10;
//?OUTPUT - can not access a before intialization

// functionVaraible()
// let functionVaraible = function () {
//     console.log("let with anyonyumus function")
// };
//?OUTPUT - can not access functionVariable() before intialization


//?with VAR VARIABLE AND ANONYMOUS FUNCTION

// console.log(functionVaraible)
// var functionVaraible = 10;
//?Undefiend

// functionVaraible()
// var functionVaraible = function () {
//     console.log("let with anyonyumus function")
// };
//?functionVaraible is not a function