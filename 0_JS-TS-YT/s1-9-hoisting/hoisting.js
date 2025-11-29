console.log("hoisting in js");

//-----------------------------------------------hoisting in js------------------------------------------

//hoisting connect to memory mangement se hai
//js is single threaded means code is executed line by line synchroniously
//if i want to do asynchronous running code then eventloop comes in picture

//broweser api,web api,local storage,session storage,setimeout,console.log => alag se execution hota hai

var a = 5;
function getName() {
  console.log("technical suneja");
}
getName();
console.log(a);

//debugger

//line -11-
///jab tak ye code executed nahi ghota tab tak isko memory main jagha milti hai
// a is global scope with val;ue undefined which is working as placeholder untill code executed a have diff value

//line-15-
//function call hota hai
//global a ko 5 value mill jati hai
//callstack main se function push ho jayega

//line-12
//console.log("technical suneja ") console main print ho jayegi
//callstack main se function pop ho jayega

//line-16
//console.log(a) executed
//push and then pop a and at last g.e.c is empty
