//! Array Mastery: Must-Know Methods
// 🔹 map: Applies a function to each element and returns a new array.

// 🔹 filter: Selects elements based on a condition and returns a new array.

// 🔹 find: Returns the first element that satisfies a condition.

// 🔹 findIndex: Returns the index of the first element that satisfies a condition.

// 🔹 reduce: Reduces the array to a single value by applying a function.

// 🔹 join: Joins all elements of an array into a single string.

// 🔹 split: Splits a string into an array of substrings.

//?map() - create a new array by applying a function to each elements

const users = [
    { id: 1, name: "John Doe", age: 28 },
    { id: 2, name: "Emma Stone", age: 22 },
    { id: 3, name: "Max", age: 19 },
    { id: 4, name: "Oliva Smith", age: 31 }
]

const names = users.map((users) => {
    return users.name
});

const upperCaseNames = users.map((users) => {
    return users.name.toUpperCase();
});

console.log(names); //

console.log(upperCaseNames); //