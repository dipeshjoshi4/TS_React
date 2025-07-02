//!Boolean Value In JS

// ● JavaScript automatically converts values to Boolean in conditional statements(like if, while, etc).
// ● Values are either treated as truthy or falsy.

//? ❌ Falsy Values(Evaluated as false in Boolean context):
// ● 0
// ● ""(empty string)
// ● null
// ● undefined
// ● NaN
// ● false(of course)

//? ✅ Truthy Values(Evaluated as true in Boolean context):
//● Any non - zero number → e.g. 1, 42, -7
//● Any non - empty string → "hello", "false"
//● Empty array[]
//● Empty object { }

//?Converting to Boolean Explicitly:
// Use the Boolean() function to convert any value to true / false.

//?Falsy Values
if (0) console.log("won't Run")
if ("") console.log("won't Run")
if (null) console.log("won't Ru\n")
if (undefined) console.log("won't Run")

//?Truthy Values
if (" ") console.log("runs");
if ("something") console.log("runs");
if ([]) console.log("runs");
if ({}) console.log("runs");
if (1) console.log("runs");
if (42) console.log("runs");

//? you can find out with Boolean function

console.log(Boolean("")); //?false
console.log(Boolean(null)); //?false
console.log(Boolean(undefined)); //?false
console.log(Boolean(1)); //?true
console.log(Boolean([])); //?true