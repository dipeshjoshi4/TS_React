
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

// console.log(#name) // private identifies not allowed outside body.
const person = new Person("Ajay");
console.log(person.name);
person.name = "";             //? Attempting to set a new name using the setter
console.log(person.name);

*/


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

// class A {
//     constructor(name) {
//         this.name = name
//     }
// }
// class B extends A {
//     // constructor(..args) {
//     //     super (...args)
//     // }
//     getName() {
//         return ` the name is ${this.name}`
//     }
// }
// const obj = new B("Dipesh");
// console.log(obj.getName());

//? BTS
// constructor(..args) {
//     super (...args)
// }
//- this default constructor explicit you creat but implicit create by object and the "super" keyword call default


//?We all we can private Varible but we can also do private function too...
/*
class User {
    #logAccess() {
        console.log("Private Logging...")
    }
    showProfile() {
        console.log("Show Profile....")
        this.#logAccess();
    }
}
const u = new User();
u.showProfile();
*/

//?OUTPUT
// Show Profile....
// Private Logging...

// Note
// u.#logAccess() // it has private identifier so dont access outside class.
//- so we did in the class as per defination of private identifier cant access out side class


//?- there is getter and setter method also there
/*
class User {
    #logAccess() {
        console.log("Private Logging...");
    }
    // Public getter to trigger private function
    get logAccess() {
        this.#logAccess();
    }
}
const u = new User();
u.logAccess //?OUTPUT - "Private Logging"
*/

//!10:00

//?Multiple  Inheritance which is not working in js. only single class can inheritance .so for use them we use "mixins"
/*
class A {

}
class B{

}
class c extends A, B{
    
}
*/

//?What is mixins?
//- function which  take class as input return new class with some add functionaility
//- in java language multiple inheritance happen with interface here with mixins

//?But we can muultilevel inheritance
// Base class -------> intermediary Level class -------->dervied Level class

/*
class A {
    SayA() {
        console.log("SayA")
    }
}
class B extends A {
    SayB() {
        console.log("SayB")
    }
}
class C extends B {
    SayC() {
        console.log("SayC")
    }
}
const obj = new C()
obj.SayC();  //?OUTPUT - SayC
obj.SayB();  //?OUTPUT - SayB
obj.SayA();  //?OUTPUT - SayA
*/


//?Mixins

/*
class Animal {
    eat() {
        console.log("eating")
    }
}
const flyable = (Base) => class extends Base {
    fly() {
        console.log("Flyable")
    }
}; //?Mixins    


class Bird extends flyable(Animal){
    bird() {
        console.log("bird")
    }
}
const myBird = new Bird()
myBird.eat();
myBird.fly();
myBird.bird();
*/
