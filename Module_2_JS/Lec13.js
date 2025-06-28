//? apply() Method
//Calls a function with a specified this value means you can manually decide what 'this' should refer to when a function runs.
//Arguments are provided as an array.
//Useful when you already have an array of values to pass as parameters.

//?call() Method
// Also calls a function with a specified this value.
// But arguments are passed individually instead of as an array.

//?bind() Method
// Does not call the function immediately.
// Instead, it returns a new function with this permanently set.
// You can optionally preset some arguments(partial application).

//?Call Method :
//- invoked the function immediately with a specific this value and arguments provided individually(cooma-seprated)
//- SYNTAX : function.call(thisArg,arg1,arg2,....)

//?Apply Method
//- invoked the function immediately with a specific this value and arguments.but Argument passed in array form
//- SYNTAX : function.apply(thisArg,[arg1,arg2,...]);

//?bind method
//- return a new function
//- with a fixed this context and optional present argument,without invoking it immediately
//- SYNTAX : const newFunc = Function.bind(thisArg,arg1,arg2,...)

// thisArg is the value that you want used as the inside the function when its get executed

// call  - invoked immediately     | argument format comma-seprated | return undefined
// apply - invoked immediately     | argument format Array          | return undefined
// bind  - invoked not immediately | argument format comma-seprated | return new function

//?Why need

// const user1 = {
//     name: "Ajay",
//     age: 26
// }
// const user2 = {
//     name: "Rahul",
//     age: 29
// }
// function printDetails() {
//     console.log(` Name: ${this.name},Age: ${this.age} `);
// }
// printDetails();

//?OUTPUT
//Name:undefined Age:undefiend

//?Why need explanation
// In a regular function, this is determined at call time, not declaration time — and if there's no object calling it, it's either undefined(strict mode) or the global object(non - strict mode).
//- so here when we write function inside the normal function then this get from lecical environment get name and age. but here outside the function
//- on this situation we use to get answer from object wheer function outside object we use call and apply Method

//?-------------------------------Call-----------------------

const user1 = {
    name: "Ajay",
    age: 26
}
const user2 = {
    name: "Rahul",
    age: 29
}
function printDetails(city, country) {
    console.log(` Name: ${this.name}, Age: ${this.age}, Location:${city} ${country} `);
}

printDetails.call(user1, "Ahmedabad", "India");
//?OUTPUT
//Name:Ajay,Age:26,Location:Ahemdabad,India

printDetails.apply(user2, ["Rajkot", "India"]);
//?OUTPUT
//Name:Rahul,Age:29,Location:Ahemdabad,India

const ajayDeatils = printDetails.bind(user1, "Delhi", "India");
ajayDeatils()
//?OUTPUT
//Name:Rahul,Age:29,Location:Delhi,India

//?-----------------INTERVIEW QUESTION-------------

const obj = {
    name: "Sir",
    greet: function () {
        return `Hello ${this.name}`
    }
}

console.log(obj.greet()); //?Hello Sir

//?what if now we want to store this in new function

// const greetFun = obj.greet();
// console.log(greetFun());//?greetFun is not a function

//?At this point we know bind give new function so we have to use bind here

const greetFun1 = obj.greet.bind(obj);
console.log(greetFun1()); //?Hello Sir

/*
const greetFun = obj.greet; // ❗ Now you're assigning the function reference

But now:
console.log(greetFun()); // ❌ "Hello undefined"
Why? Because this inside greet is now undefined (or window in non-strict mode), not obj

Fixing with bind
const greetFun1 = obj.greet.bind(obj);
console.log(greetFun1()); // ✅ "Hello Sir"
✅ bind(obj) creates a new function where this is permanently set to obj.

*/