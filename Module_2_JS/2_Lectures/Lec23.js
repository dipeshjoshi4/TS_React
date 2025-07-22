
//!36 Lecture-23-Memoization Mastery: Optimize Repetitive Functions

//- Memoization is an optimization technique used to speed up function execution by caching the results of expensive function calls and reusing the cached result when the same inputs occur again.

//? How It Works:
// A memoized function stores the results of previous computations in a cache(often an object or a map).
// When the function is called with the same arguments, it first checks the cache.
// If the result is already in the cache, it returns the cached result instead of recomputing it.

//? Use Case:
//- Memoization is particularly useful for functions with heavy computations or recursive functions like those used in calculating Fibonacci numbers
// - usefull in heavy computation,recursion,React compon(Use Memo)

//!Expensive Function Without Memoization

// function slowAdd(a, b) {
//     for (let i = 0; i < 1e8; i++) { }
//     return a + b;
// }

// console.time("No Memo 1st call");
// console.log(slowAdd(5, 10));
// console.timeEnd("No Memo 1st call"); //?77ms-differ on every call

// console.time("No Memo 2nd call");
// console.log(slowAdd(5, 10));
// console.timeEnd("No Memo 2nd call"); //?81ms-differ on every call

//!Expensive Function With Memoization

function memoize() {
    const cahce = {}
    return function (a, b) {

        const key = `${a}_${b}`;

        if (cahce[key]) {
            return cahce[key]
        }

        for (let i = 0; i < 1e8; i++) { }
        const result = a + b;
        cahce[key] = result
        return result
    }
}

const add = memoize();

console.time("with memo 1st call")
console.log(add(5, 10))
console.timeEnd("with memo 1st call") //?With memo 1st call - 219.065ms

console.time("with memo 2nd call")
console.log(add(5, 10))
console.timeEnd("with memo 2nd call") //?With memo 1st call - 0.381ms



//?Process in short of Memoization

//- Here if you see then we use closure use too
//- as per closure memoize() execute and inner function(a,b) remember outer function variable like const cache = {}
//- if cahce[key] first empty then after first output again same calculation which is from key came then the return

//this will happen in short
// const cahce = {
//     3_4:7
// }

//?Modify refine code of memoziation

//?Refine Code for Memo
/*
function memoize() {
    const cahce = new Map() // const cahce = {}
    return function (a, b) {
        const key = `${a}_${b}`;
        // if (cahce[key]) {
        //     return cahce[key]
        // }
        if (cahce.has(key)) {
            return cahce.get(key)
        }
        for (let i = 0; i < 1e8; i++) { }
        const result = a + b;
        cahce.set(key, result)    //? cahce[key] = result
        return result
    }
}
*/
