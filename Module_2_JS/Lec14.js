//! #### Slice and Splice

//?slice()
//-gives a portion of an array  as a new  array without changing the original

//?splice()
//-adds,remove or replaces elements in the array by modifying the original.

//? use of method
//When you call network api and its give reponse and you want to slice
//chnaging value in array

//?How the inclusive and Exclusive work
// any range value the start point is always inclusive and last point is always exclusive in slice only
// in splice all are inclusive
// means start from 2 to end at 8 => 2 is include and 8 is not means => 2,3,4,5,6,7

//------------------------------------------------------------------------------------------------------------------------------------

//?Example-1
let items = ["Pen", "Pencil", "NoteBook", "Eraser", "Sharpener"];

//?ONLY DELTED ITEM SHOW
// let items2 = items.splice(2, 1);
// console.log(items2); //?OUTPUT - ["NoteBook"]

//?DELETE
// items.splice(2, 2);   //?OUTPUT - ["Pen", "Pencil","Sharpener"]

//?ADD
// items.splice(1, 0, "Marker"); //?OUTPUT - ["Pen", "Marker","Pencil","Sharpener"]

//?Replace
// items.splice(2, 2, "Scale", "Ruler"); //?OUTPUT - ["Pen", "Marker","Scale","Ruler"]
// items.splice(2, 3, "Scale", "Ruler", "Campus"); //?OUTPUT - ["Pen", "Marker","Scale","Ruler","Campus"]

// console.log(items); //?OUTPUT - ["Pen", "Marker","Scale","Ruler","Campus"]


//?Example-2

// let cart = ["Milk", "Bread", "Butter", "Eggs", "Juice"];

// let prview = cart.slice(1, 3) //start from 1, End at before 3 means 2

// console.log(cart); //?Output- ["Milk", "Bread", "Butter", "Eggs", "Juice"];

// console.log(prview); //?Output- [ "Bread", "Butter"];
