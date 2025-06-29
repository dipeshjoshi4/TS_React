//! #### Slice and Splice


//?Explaination
// any range value the start point is always inclusive and last point is always exclusive
// means start from 2 to end at 8 => 2 is include and 8 is not means => 2,3,4,5,6,7

//?Example-1
var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];

console.log(users.slice(1, 3)) //?["Tim","Ton"] // here ending is not inclusive

console.log(users.splice(1, 4)) //?["Tim","Ton","Sam","Sor"] //here inclusive all 


