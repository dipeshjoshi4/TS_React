//! Working with Objects in JavaScript

//? 1. Object Creation –
//- Objects in JavaScript are created using key-value pairs.
//- where each key is a string or (symbol) and each value can be of any type (primitive or object).
//- objects are used to structure data and represent real-world entities.

//? 2. Everything Is an Object
//– In JavaScript, almost everything(arrays, functions, etc.) is derived from the base Object.

//? 3. Object Methods
//– Use Object.keys(), Object.values(), and Object.entries() to get keys, values, and key - value pairs respectively.

//? 4. Looping Through Objects –
//- Use for...in to loop through keys.
//- Use for...of with Object.entries() to loop through both keys and values.

//? Please Note:
//- Primitive Types(like number, string, boolean, null, undefined, symbol, bigint) are not objects.

//?One Way to Create an Object

const Person = {
    name: "Dipesh",
    age: 25,
    getName: function () {
        return this.name;
    }
}

// console.log(Person.getName()); //? Output: Dipesh

// console.log("name" in Object); //? Output: true //-always write key in "" to avoid syntax error and in object key internally value as string
// console.log("name" in Person) //? Output: true

// console.log("professional" in Person) //? Output: false

// console.log("toString" in Person) //? Output: true //-here toString is a method of the Object prototype, which is inherited by all objects.so that we see as true.

// console.log(Person.hasOwnProperty("toString")); //? Output: false //-hasOwnProperty() checks if the property is directly on the object, not inherited from

//? key and value print at same time [NOT IN ARRAY FORM]

//?WITH FOR IN LOOP
// for (let key in Person) {
//     console.log(key + " " + Person[key])
// }

//?Output:
// name Dipesh  age 25 getName function() { return this.name; }

//?WITH FOR OF LOOP(We do destructuring here to get key and value at same time)
// for (const [key, value] of Object.entries(Person)) {
//     console.log(key, value)
// }
//?Output:
// name Dipesh age 25 getName function() { return this.name; }

//?what should Object.entries()do ?
// console.log(Object.entries(Person)); //? Output: [ [ 'name', 'Dipesh' ], [ 'age', 25 ], [ 'getName', [Function: getName] ] ]
//it gives us key and value in array form .and we can use it with for of loop to get key and value at same time.

//?FOR THE GET KEY but in array form
// console.log(Object.keys(Person)); //? Output: [ 'name', 'age', 'getName]

//?FOR THE GET Values but in array form
// console.log(Object.values(Person)); //? Output: [ 'Dipesh', 25, [Function: getName]]





//? Second Way to Create an Object

// const Person = new Object();
// Person.name = "Ajay";
// console.log(Person); // Output: { name: 'Ajay'}

// console.log(Person instanceof Object);// Output: true
// console.log(typeof Person); // Output: object

//- In JavaScript, almost everything is derived from the base Object.

