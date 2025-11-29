//--------------------------Event Bubbling, Capturing and Propagation-------------------
//---------------------------stop Propagation ,immedidate Propagation,prevent default------------

console.log("Event Bubbling, Capturing and Propagation");

//whenver event happen there is so many functionallity in behind working them to stop ,some bydefault behaviour

//Event Bubbling

// var div = document.querySelector("div");
// div.addEventListener("click", () => {
//   console.log("div");
// });

// var button = document.querySelector("button");
// button.addEventListener("click", () => {
//   console.log("button");
// });

//answer => i click on button

//-> button
//-> div

//-  bydefault buutton click event and div print which event apply on button 's parent
//-  child to parent event will be working from child to body and html the event propagate.thats propagation called event bubling
//-  if now apply event on button to then div event also called .which is example of bubbling

//----------------------------------Event  Capturing -----------------------------

//just like event bubbling child to parent => event capturing  is going to parent to child
//- to enable event capturing u have to write true and event capturing is enable
// - very few time event capturing u can see

// var div = document.querySelector("div");
// div.addEventListener(
//   "click",
//   () => {
//     console.log("div");
//   },
//   true
// );

// var button = document.querySelector("button");
// button.addEventListener(
//   "click",
//   () => {
//     console.log("button");
//   },
//   true
// );

//answer=> i click on button
//-> div
//-> button

//----------------------------------Event stop Propagation -----------------------------

//when sometime u used to do only button(child element) event to work and not give the div(parent element ) event to work
//then u have to do stop propagation of transfering event for that You have to put stop propagation in child

// var div = document.querySelector("div");
// div.addEventListener("click", () => {
//   console.log("div");
// });

// var button = document.querySelector("button");
// button.addEventListener("click", (event) => {
//   event.stopPropagation();
//   console.log("button");
// });

//answer => i click on button
// button

//---------------------------------- stop Immediate Propagation  -----------------------------

//when same element have 2 event listnear then u have to put immedidate Propagation to not going the parent element
//you can also put stop immediate
//but a button have 3 event listnear and also button parent have also one event listnear then just print button first 2 event working
//you should use this

// var div = document.querySelector("div");
// var button = document.querySelector("button");

// div.addEventListener("click", () => {
//   console.log("div");
// });

// button.addEventListener("click", () => {
//   console.log("button");
// });

// button.addEventListener("click", (event) => {
//   event.stopImmediatePropagation();
//   console.log("button1");
// });

// button.addEventListener("click", () => {
//   console.log("button2");
// });

//answer => i click on button
// button
//button 1

//---------------------------------prevent default-------------------------

//anchor tag by default behaviour is to open new tab
//but what if we have to stope event of elment which bydefault

var div = document.querySelector("div");
var a = document.querySelector("a");

a.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("click on a");
});
