console.log("Object Prototype In JavaScript");

//---------------------------------------------JS Prototype perks----------------------

//CUTOM FUNC MADE BY
//EVERY INBUILT PUSH..... TYPE METHODS
//INHERITANCE ALL BECASUE PROTOTYPE

//inheritance means u have class that class contains variable and function and u have to inherit that members or function and u do that .that is called inheritance
//inhertance means on e clas property u use in another class thtas called inheritance

//js object made by this 3 way
//1st
// const obj1 = new Object({
//   name: "Ajay",
// });

//2nd
// const objName = new objName();

//3rd
// const obj2 = {
//     name: "Ajay"
// };


//-------------------Notes

// const obj = {
//   name: "Ajay Suneja",
// };
// console.log(obj);
//everything in js is drive by object .every function and array is use object protottype
//when u print that object there is so much property in it . that is called object prototype
//so it gives this kind of property ,which u can use for the your object

//-------------------Notes

//---------------------------------------------------------------------------------------------------------------

// const obj = {
//     name: "Ajay Suneja",
//     getName: function () {
//         return this.name
//     }
// };
// console.log(obj);
// ///////////////////
// const obj2 = {
//     rollNo: 5,
//     __proto__:obj,
// };
// console.log(obj2)
// console.log(obj2.getName())

// console.log(obj2.name);
//now if i print like this in object2 name will be not find => undefined
//so for access name in object2
//so now i want my first object is going as prototype in obj2
//so that i can find out name in obj2 for that "__proto__ :obj "

//---------------------------------------------------------------------------------------------------------------

// const obj = {
//   name: "Ajay Suneja",
//   getName: function () {
//     return this.name;
//     },
//     getroll: function () {
//         return this.roll;
//   }
// };
// console.log(obj);
// ///////////////////
// const obj2 = {
//     roll: 1,
//     name:"vivek",
//   __proto__: obj,
// };
// console.log(obj2);
// console.log(obj2.getName());
// console.log(obj2.getroll());

 //now itself object2 have name keyvalue pair so its gives "vivek" insted of "Ajay Suneja"
 //first preference is always own object property then with use of proto go into proto'sObj

//---------------------------------------------------------------------------------------------------------------

// const obj = {
//   name: "Ajay Suneja",
//   getName: function () {
//     return this.name;
//   },
//   getroll: function () {
//     return this.roll;
//   },
// };
// ///////////////////
// const obj2 = {
//   name: "vivek",
//   roll: 1,
//   __proto__: obj,
// };
// ///////////////////
// const obj3 = {
//     class:"Btech CE",
//     __proto__:obj2,
// }
// console.log(obj3); //You cann see all the prototype in object3

//-------------------------------------------------


// const object = new Object()
// console.log(object) //you can see object prototype

// const array = new Array()
// console.log(array) //you can see Array prototype

//-------------------------------------------------

//Make Your Own Prototype

// Array.prototype.show=function(){
//     return this;
// }
// const cities = ["Delhi"];
// console.log(cities.show())

// Array.prototype.covertIntoObject = function () {
//     let newobj = {};
//     this.forEach((element) => {
//         newobj[element] = element;
//     })
//     return newobj;
// }
// console.log(cities.covertIntoObject());

//-----------------------------------------------------------

// make you own constructor prototype

// const obj = {
//   name: "Ajay Suneja",
//   getName: function () {
//     return this.name;
//   },
//   getroll: function () {
//     return this.roll;
//   },
// };

// function MyPrototype(name,roll) {
//     this.name = name
//     this.roll = roll
// }
// MyPrototype.prototype = obj;
// const objname = new MyPrototype("Priyanka", "21");

// console.log(objname);
// console.log(objname.getName());
// console.log(objname.getroll());