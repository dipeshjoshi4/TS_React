// Lec2.js

//?for animation see how things work ---- https://www.jsv9000.app/


//?Example-1

// console.log("start")
// setTimeout(() => {
//     console.log("setTimeout callback function")
// }, 4000)
// Promise.resolve().then(() => {
//     console.log("promise calling")
// })
// console.log("end")

//? Output:
// start
// end
// promise calling
// setTimeout callback function

//?Example-2
/*
console.log("waiter!! Order Recevied");

setTimeout(() => {
    console.log("Pizza is Ready")
}, 2000)

fetch("https://dummyjson.com/products/1").then(() => console.log("API repsonse recevied"));

Promise.resolve().then(() => console.log("Quick Billing Done!"));

console.log("serving Water");
*/

//?OUTPUT
//waiter!! Order Recevied"
//serving Water
//Quick Billing Done!
//API repsonse recevied
//Pizza is Ready

//?Example-3
// function f1() {
//     console.log("f1 called")
// }
// function f2() {
//     f1();
//     console.log("f2 called")
// }
// f2();

//? Output:
// f1 called
// f2 called

