
//! Call,bind,apply by Akshay

// let name = {
//     firstName: "Dipesh",
//     lastName: "Joshi",
//      printFullName: function () {
//          console.log(this.firstName + " " + this.lastName);
//      }
// }
// name.printFullName();

// let name2 = {
//     firstName: "Virat",
//     lastName: "Kohli",
// }

//with call method we can do the function borrowing. we can borrow function from other object and give data of other object
// name.printFullName.call(name2);


//?genrally in best practise we dont write our method in specific object

//?Example-2

let name = {
    firstName: "Dipesh",
    lastName: "Joshi",
}

let printFullName = function (hometown, State) {
    console.log(this.firstName + " " + this.lastName + " From " + hometown + ", " + State);
}

let name2 = {
    firstName: "Virat",
    lastName: "Kohli",
}

// printFullName.call(name) //?Dipesh Joshi
// printFullName.call(name2) //?Virat Kohli

//?What if we have to pass other arguments too.so we can do like this

printFullName.call(name, "Ahmedabad", "Gujarat") //?Dipesh Joshi From Gujarat
printFullName.call(name2, "West Delhi", "Delhi") //?Virat Kohli From Delhi

//?Apply
//- only difference between apply and call is that passing argument in array .reference is same

printFullName.apply(name, ["APPLYCITY", "Gujarat"]); //?Dipesh Joshi From APPLYCITY,GUJARAT

//?bind
//- only differnce between call and bind -> bind gives copy of function which can be invoking later as method(function) 

let newFunction = printFullName.bind(name, "AHMEDABAD", "GUJARAT");
newFunction(); //?Dipesh Joshi From AHEMDBAD,GUJARAT