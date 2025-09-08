console.log("closure in javascript");

//function call main jo parameter varaibles ho we cant repeat but with the closure we can acheive that state
//calling function in the function
//in closure function value does not lost

//what is lexical scope?
// acess the value of a and b from the function c's value is right there then it take and its calls then sum

//Example-1
/*
var sum = function (a) {
  console.log("Live Viewers " + a);
  var c = 4;
  return function (b) {
    return a + b + c;
  };
};
var store = sum(200);
console.log(store(5));
*/

//in other language you cant be store the function variables and value but in js you can retain ur values
//normal call => function call then va;ues dont eatin but here it does

var sum = function (a, b, c) {
  return {
    getSumTwo: function () {
      return a + b;
    },
    getSumThree: function () {
      return a + b + c;
    },
  };
};
var store = sum(3, 4, 5);
console.log(store.getSumTwo());
console.log(store.getSumThree());

var store1 = sum(10, 20, 30);
console.log(store1.getSumTwo());
console.log(store1.getSumThree());
