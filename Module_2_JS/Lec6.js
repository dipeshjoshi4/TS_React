//! # Closure in js

//- A closure is a function that has access to its own scope, the outer function's scope, and the global scope.

//- Closures are created every time a function is created, at function creation time.

//- Closures allow functions to have private variables and maintain state across invocations.

//?- In simple terms, a closure means that an inner function can remember and use variables from its outer function even after the outer function has finished executing.

//- closure is a powerful feature in JavaScript that allows functions to have access to variables from their outer (enclosing) scope, even after that outer function has finished executing.

//- This is particularly useful for creating private variables and functions, as well as for maintaining state in asynchronous operations.

//?- Lexical scope means that a function remembers the environment in which it was defined, including all the variables in that scope.

/*
function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count
    }
}
const counter = createCounter();
console.log(counter()); // 1st call => 0+1 = 1
console.log(counter()); // 2nd call => 1+1 = 2      
console.log(counter()); // 3rd call => 2+1 = 3
*/

//?-----------Explanation-----------

//- so here outer function "createCounter()" called once and then it gives his inner function to counter
//- now inner function is scope its outer but outer function is executing alredy then lexical scope and closure comes in picture
// - here on 2nd and 3rd time call inner function remember it outer function scope so that we can answer on 2nd and 3rd call