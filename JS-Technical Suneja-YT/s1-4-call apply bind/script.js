console.log("call apply bind in js");

//-----------------------------------------------------Apply,call,Bind-----------------------------------------------

//1.Difference between all
//2.what is the purpose of this

//-------------------------------------------------- Created Problem Statement-----------------------------------------------------
/*
let userDetails = {
  name: "Ajay Suneja",
  age: 28,
  Designation: "software engineer",
  printDetails: function () {
    console.log(this);
  },
};
userDetails.printDetails();

let userDetails2 = {
  name: "Anuj Suneja",
  age: 32,
  Designation: "software engineer",
  printDetails: function () {
    console.log(this);
  },
};
userDetails.printDetails();

*/

//this keyword use for self propery and method

//------------------------------------------------------------------call--------------------------------------------------------

//Problem statement
//is if this will be printing name and both function purpose was same why i do write double the function and make more lengthy
//solution
//the above function(userDetails) this will be calling my 2nd function(userDetails2) with the help of above function(userDetails)
/*
let userDetails = {
  name: "Ajay Suneja",
  age: 28,
  Designation: "software engineer",
  printDetails: function () {
    console.log(this.name);
  },
};
userDetails.printDetails();

let userDetails2 = {
  name: "Anuj Suneja",
  age: 32,
  Designation: "ML engineer",
};

//function borrrowing
userDetails.printDetails.call(userDetails2);
*/

//problme statement-2

///Now think like that if the userDeatils1 function will be outside object and its genric function and i want to use that generic function without any dependecy
//then how can i use that function

let userDetails = {
  name: "Ajay Suneja",
  age: 28,
  Designation: "software engineer",
};

let printDetails = function (state, country) {
  console.log(this.name + " " + state + " " + country);
};

printDetails.call(userDetails, "Delhi", "India"); //YOU CAN GIVE UNLIMITED PARAMETERS TOO

let userDetails2 = {
  name: "Anuj Suneja",
  age: 32,
  Designation: "ML engineer",
};

printDetails.call(userDetails2, "Delhi", "India");

//------------------------------------------------------------------Apply--------------------------------------------------------

//apply and call have one small difference that when you pass the argument with call indvidually in apply you can directly mention as array form

printDetails.apply(userDetails2, ["Delhi", "India"]);

//------------------------------------------------------------------bind--------------------------------------------------------

//bind and call have one differnece that bind say dont direct call .just store or make a copy and then when need just invoked
//bind function call copy and invoked latter

let newFun = printDetails.bind(userDetails2, "Delhi", "India");
console.log(newFun); //function
newFun(); //answer
