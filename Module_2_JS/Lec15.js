//! Spread and Rest Operator

//● One Symbol{...},[...] -> spread to unpack | rest to collect

//?Spread Operator(...)
//● the spread Operator is used to "spread" or unpack elements of an array or object
//● Used to unpack elements from arrays or properties from objects.
//● Mostly used in function calls, array / object cloning, and merging.
//● Does not mutate original data(when cloning / merging).

//?Examples:
//● [...arr] – clones an array
//● {...obj } – clones an object
//● func(...arr) – spreads array values as individual arguments

//?Rest Operator(...)
//● the rest operator collects multiple elements into single array or object
//● Used to gather multiple arguments or values into a single array or object.
//● Works in function parameters and destructuring.
//● Allows handling of variable number of arguments.

//?Syntax
// const newArr = [...oldArr];
// const newObj = {...oldObj};


//?Copy Array
// const nums = [1, 2, 3];
// const copy = [...nums, 4];
// console.log(copy); //?OUTPUT-[1,2,3,4]

//?Copy Object
// const newStudent = {
//     name: "Dipesh",
// }
// const copy1 = { ...newStudent, "age": 28 };
// console.log(copy1); //?OUTPUT-{name:"dipesh",age:28};

//?Merge Array
// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const merge = [...a, ...b];
// console.log(merge); //?OUTPUT-[1,2,3,4,5,6]

//?Merge Object
// const p = {
//     city: "Mumbai"
// }
// const q = {
//     country: "india"
// }
// const mergeObject = { ...p, ...q };
// console.log(mergeObject) //?OUTPUT - {city:"Mumbai",country:"India"}

//?IN FUNCTION SPREAD

// function sum(a, b, c) {
//     console.log(a+b+c)
// }
// const values = [1, 2, 3];
// sum(...values); //?OUTPUT - 6

//!8:20
//?REST OPERATOR

//?Example-1
// function logAll(...items) {
//    console.log(items)
// }
// logAll("Pencil", "Eraser", "Circle"); //?OUTPUT- ["Pencil", "Eraser", "Circle"]

//?Example-2
const [first, ...rest] = [10, 20, 30, 40];
console.log(first, rest); //?OUTPUT : 10[20,30,40];
