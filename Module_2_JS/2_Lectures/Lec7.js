//! # Classes, Objects, and Getters/Setters in Javascript

//? Lecture Summary 🚀

//? 1. Class & Object:
// A class is like a blueprint for creating objects.
// An object is an instance of a class, meaning it’s a specific item created using that blueprint.

//? 2. Constructor:
// The constructor is a special method in a class that gets called when you create a new object.It initializes the object’s properties.

//? 3. Getters and Setters:
// Getters are methods that allow you to access(or “get”) the value of a property.
// Setters are methods that let you update (or “set”) the value of a property with some added logic, like validation.

//? 4. Purpose of this:
// The keyword this refers to the current object instance.It’s used to assign or access the properties of that particular object.

//?  5. Underscore _ Convention:
// Using an underscore(like _name) is a common practice to show that a property is meant to be private or internal.It helps indicate that this property shouldn’t be accessed directly from outside the class.

//?CODE EXAMPLE
/*

class Person {
    constructor(name) {                //? The constructor method is called when a new object is created
        this._name = name              //? The constructor initializes the name property. "_" is used to  property is private
    }
}
const person = new Person("Ajay");     //?object creation using the Person class.
console.log(person.name);
// Output: Ajay

person.name = "Vijay";
console.log(person.name);
// Output: Vijay

*/

//- this is not good practice, we should use getters and setters to access and modify properties

//? Getters and Setters

//- the benefit of using getters and setters is that we can add validation or other logic when getting or setting a property
//- we can also use getters and setters to make properties read-only or write-only ||  private or protected
//- other developers can use the class without needing to know the internal details of how it works


//?CODE EXAMPLE

/*
class Person {
    constructor(name) {
        this._name = name
    }

    get name() {
        return this._name;  // Getter method to access the name property
    }

    set name(newName) {
        if (newName ) {
            this._name = newName;
        } else {
            console.log("Invalid name");
        }
    }
}

const person = new Person("Ajay");         //?making an object using the Person class

console.log(person.name);           //? Accessing the name property using the getter

person.name = "Vijay";             //? Attempting to set a new name using the setter
console.log(person.name);          //? Accessing the updated name property using the getter

*/



