
//!JavaScript Advanced OOP: Private Variables, Mixins & Inheritance

//! # in private variable (Reference lecture-7)
/*
class Person {

    #name //private Varible

    constructor(name) {
        this.#name = name
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        if (newName) {
            this._name = newName;
        } else {
            console.log("Invalid name");
        }
    }
}
*/

// console.log(#name) // private identifies not allowed outside body.

const person = new Person("Ajay");
console.log(person.name);
person.name = "";             //? Attempting to set a new name using the setter
console.log(person.name);

//?Explanation
/*
- You never assign anything to #name in the else block.So, the previous value "Ajay" stays unchanged.

//?Timeline of Execution

console.log(person.name) → Getter returns "Ajay".
person.name = "" → Setter detects falsy value → logs "Invalid name" → does not change #name.
console.log(person.name) → Getter again returns unchanged #name = "Ajay".

this code is designed to reject empty names.Since the setter does not assign a new value in the else branch, the old value "Ajay" remains.
That’s why the final output is:

//?OUTPUT
Ajay
Invalid name
Ajay

*/

//!Mixins & Inheritance(Reference lecture-18)