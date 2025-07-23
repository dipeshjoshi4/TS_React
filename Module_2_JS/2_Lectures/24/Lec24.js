//!Es6 Module In JS[Important]

//?What are ES6 Modules ?
//ES6 modules allow you to organize code into reusable pieces.
//Each module is a file that can export its code(variables, functions, classes, etc.) and import code from other modules.

//?Using Modules in the Browser:
//When using ES6 modules in a browser, you need to add type = "module" to your script tag.
//This tells the browser to treat the file as a module, enabling the use of import and export statements.

//?Using Modules in Node.js:
// In Node.js, to use ES6 modules, you need to set "type": "module" in your package.json file.
// This tells Node to interpret.js files as ES6 modules.
//Command => npm init -y  for making package.json file

//?Exporting and Importing:
// Export: You can export functions, variables, or classes from a module using the export keyword.
// Import: You can import the exported code into another file using the import keyword.

//?Why Use Export and Import
//-organize code in seprate files
//-resue logic across project
//-avoid global namespace pollution
//-better for collbration and scalbility
 


//?Memo code refine
//?even bubbling e.stoppropagate function modify

//?Export and Import

export const add = (a, b) => a + b;
export const Mul = (a, b) => a * b;


// - browser dont know what is export and import thatsy we in Lec24.html we put our file and type="module"