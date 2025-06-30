//! # Destructuring in JavaScript (Object & Array)


//?Array Destructuring:
// This allows you to extract values from an array and assign them to individual variables.For example, if you have an array of numbers, you can easily assign the first and second elements to separate variables in a single line of code.


//?Object Destructuring:
//  This works similarly but with objects.It lets you extract properties from an object and assign them to variables.For example, if you have a user object with properties like name and age, you can quickly create variables for those properties.

//a short and clean way to extract value from object and array.
//help in writing maintable and readable code so that other developer can easily understand

//?Example-1

const User = {
    name: "Ajay",
    age: 25,
    location: "Ahmedabad",
}

//?Traditonal way to get key
// const user1 = User.name;
// console.log(user1); //Output-Ajay

//?Mordern way to get key(Object Destructring)
// const { name, age } = User;
// console.log(name, age); //Output-Ajay 25

//?You can Rename the properties means keys too
// const { location: city } = User;
// // console.log(location); //location is not defined because you chnage the location name to city
// console.log(city); //Output-Ahmedabad

//? you can give default value too which property is not mentioned in you object
// const { email = "Not provide" } = User;
// console.log(email); //Output - Not provide

const colors = ["red", "blue", "green"]

//?Tradintonal way
// console.log(colors[0]); //Output-red

//?Destructure in Array

//?Example-1
// const [first, second] = colors;
// console.log(first, second); //Output-red,blue

//?Example-2
// const [, , third] = colors;
// console.log(third); //Output-green

//?Example-3
const Person = {
    name: "Dipesh",
    age: 25,
    getName: function () {
        return this.name;
    }
}

// console.log(Object.entries(Person));
//? Output: [ [ 'name', 'Dipesh' ], [ 'age', 25 ], [ 'getName', [Function: getName] ] ]

// for (const [key, value] of Object.entries(Person)) {
//     console.log(key, value)
// }
//?Output:name Dipesh age 25 getName function() { return this.name; }

//so here Object.entries give array containing multiple array.which stored key and value
//so to get rid of array we use destructing of array in for..of loop


