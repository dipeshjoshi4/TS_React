//! Optional Chaining (?.): || Nullish Coalescing Operator (??): || Logical OR Operator (||):

//?Optional Chaining(?.):
//  This operator allows you to safely access deeply nested properties of an object without having to check if each reference in the chain is valid.If any part of the chain is null or undefined, it short - circuits and returns undefined instead of throwing an error.


//?Nullish Coalescing Operator(??):
// This operator returns the right - hand operand when the left - hand operand is null or undefined.It’s a way to provide a default value only when dealing with null or undefined.


//?Logical OR Operator(||):
//  This operator returns the right - hand operand if the left - hand operand is any falsy value(false, 0, "", null, undefined, etc.).It’s commonly used to set default values, but it has a broader definition of what counts as "falsy" compared to the nullish coalescing operator.

//- this all are safety operators that help in avoiding runtime errors when dealing with objects that may not have certain properties defined.

//?Optional Chaining Example:

//- use when you are not sure if a property is exist or maybe undefiend and null

//?-------------------------------Example-A--------------------------------------

/*
const User = {
    name: "dipesh",
    age: 20,
    address: {
        city: "ahemdabad",
        pin: 380001,
    },
    getName: function () {
        return this.name;
    }
}
 console.log(User.address.city); //? "ahemdabad"
 console.log(User.getName()); //? "dipesh"
*/

//- from this we can easily get city and function getName

//- but suppose we want to access a property that may not exist, because we some time get data from api and we dont know this particular property have or not. so to get rid of error  we can use optional chaining:

//?-------------------------------Example-B--------------------------------------

/*
const User = {
    name: "dipesh",
    age: 20,
    // address: {
    //     city: "ahemdabad",
    //     pin: 380001,
    // },
    // getName: function () {
    //     return this.name;
    // }
}
*/

//- when sometime the we dont know if there is this property(address and function) is in object or not so to rid of error we use this and if not get undefiend

//?SYNTAX
//? in "User.getData()" we use "User.getData?.()"     //- while function ?.
//? in  "User.name.rollno" we use "User.name?.rollno" //- for other ?

// console.log(User.address?.city); //? undefined
// console.log(User.getName?.()); //? undefined


//?Nullish Coalescing Operator(??):
//- use when you want fallback if property is null or undefiend  

//?-------------------------------Example-c--------------------------------------


const User = {
    name: "ajay",
    preferences: null,
    getData: function () {
        return this.name;
    }
}

// const pref = User.preferences;
// console.log(pref); //? null

//so when there is left hand side is null or undefined then we can use nullish coalescing operator to provide default value:

// const userPref = User.preferences ?? "default preference";
// console.log(userPref); //? "default preference"

// const City = User.address?.city ?? "Mumbai";
// console.log(City); //? "Mumbai"

//?Logical OR Operator(||):

//its use to provide default values, but it considers all falsy values (false, 0, "", null, undefined) as triggers to use the right-hand operand.

//?-------------------------------Example-D--------------------------------------

// const quantity = 0;
// const result = quantity || 10;
// console.log(result); //? 10

//? example of logical OR operator with optional chaining and nullish coalescing operator:

const User2 = {
    name: "ajay",
    address: undefined,
    getData: function () {
        return this.name;
    }
}
// const address = User2.address?.city || "Mumbai";
// console.log(address); //? "Mumbai"

//- in this case, if address is undefined then it will return Mumbai.
//- but if address is empty object then it will return empty object not Mumbai

// const address2 = User2.address?.city ?? "Mumbai";
// console.log(address2); //? "Mumbai"

//- here address is undefined so it will return Mumbai
//- but if address is empty object then it will return empty object not Mumbai

//?Summary:
//- Use optional chaining (?.) to safely access properties that may not exist.
//- Use nullish coalescing operator (??) to provide default values only when the left-hand side is null or undefined.
//- Use logical OR operator (||) to provide default values for any falsy value, but be aware that it considers more than just null or undefined.
