
//? var vs let vs const

//?var
// Function-scoped
// Can be re - declared & updated
// Hoisted(initialized with undefined)
// Avoid in modern JS(can cause bugs)

//?Examples
// var a = 10;
// var a = 20;
// a = 30;
// console.log(a); // 30

//?let
// Block-scoped
// Can be updated, not re - declared
// Hoisted but in Temporal Dead Zone
// Use when the variable value changes

//?Examples
// let a = 10;
// let a = 20;
// a = 30; // you can re-assigne
// console.log(a); // a is not re-declared, it will throw an error

//?const
// Block - scoped
// Must be initialized & cannot be reassigned
// Hoisted but in Temporal Dead Zone
// Use by default for constants

//?Examples
// const a = 10;
// const a = 20; // you can not re-assigne
// a = 30; // you can not re-declared,
// console.log(a);



//?Function Scope vs Block Scope

//?Example-1

// function varExample() {
//     if (true) {
//         var x = 10;
//     }
// }
// console.log(x);
// varExample(); //x is not defined here, but it is defined in the function scope

//?Example-2

// function varExample() {
//     if (true) {
//         var x = 10;
//     }
//     console.log(x);
// }
// varExample(); // x is defined here, it is accessible in the function scope

//?Example-3

// function letExample() {
//     if (true) {
//         let x = 10;
//     }
//     console.log(x);
// }
// letExample(); // ReferenceError: x is not defined

//?Example-4

// function letExample() {
//     if (true) {
//         let x = 10;
//         console.log(x);
//     }
// }
// letExample(); // x is defined here, it is accessible in the block scope

//?Example-5
// for (var i = 1; i <= 3; i++){
//     setTimeout(() => {
//         console.log(i);
//     },1000)
// }

// Output: 4, 4, 4
// The loop has completed, and 'i' is now 4 when the timeout executes means i=1 and then i=2 and i=3 and when i=4 comes setTimeout execute and it will shows us 4,4,4
//- here the last value of 'i' is 4, so it prints 4 three times. .last i value in function scope is {4}

//?Example-6
// for (leti = 1; i <= 3; i++){
//     setTimeout(() => {
//         console.log(i)
//     },1000)
// }
// Output: 1, 2, 3
// The loop creates a new scope for each iteration, so 'i' retains its value for each timeout.
//- here the last value of 'i' is 3, so it prints 1, 2, 3 three times.
//- every time for iteration new block scope created with each value of 'i'.