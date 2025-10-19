
//!---------------------Module 12: Testing React applications Using Jest------------------

const { fail } = require("assert")
const { totalmem } = require("os")

//!160-Lec-1-React Testing Simplified: Mastering Jest and Component-Level Testing

//?Notes

//?What is Jest ?
// - Jest is a JavaScript testing framework developed by Facebook.
// - It helps run tests, compare values, and check if code works as expected.

//?Features:
// • Zero config Built -in test runner
// • Snapshot testing
// • Fast and reliable
//Jest executes your test cases, checks results, and reports them back to you automatically.

//? What is React Testing Library(RTL)
//A lightweight library for testing React components.
//Focuses on testing behaviour from a user's perspective rather than implementation details.
//together with Jest as the test runner.

//?4 Types/ Many
//1.Unit Testing(Here) -Test Coverage |Branch Coverage |Code Deploy after certain limit above your code can deploy
//2.Intergation Testing
//3.System Testing
//4.Performance Testing

//?setUp Steps

//mkdire npm - testing => make folder name
//cd npm - testing => enter the folder
//npm init -y => create package.json file
//=> npm install--save - dev jest (from jest website-https://jestjs.io/docs/getting-started)
// you will see dev-dependecy =>

//?In Package.json
// "test": "echo \"Error: no test specified\" && exit 1" =>chnage into
// "test": "jest"

//=> when we write => npm test
//=> no test found because no test file

//!161-lec-2-Getting Started with Jest: How Jest Runner Finds and Executes Your Tests

/*
In this lecture, we explored what the Jest runner is and how it automatically detects your test files in your project.
We covered how to create test files, write simple test cases, and run them seamlessly using Jest.
By the end of this lecture, you’ll have a solid understanding of how to get started with Jest and why it’s a great tool for running your tests effortlessly.
*/

//?Why jest is test runner only ?

//?How to Creat test file and run what the answer of run

//- test file should name as        //? filname.test.js
//- if empty test file we run then  //? error:it should be one test case
//- syntax                          //? test("My first test file", () => { })

//?answer
// test suits:  1 passed 1 total
// Tests: 1passed, 1 total
// Snapshots: 0
// Time:2.322s
// Ran all test suites

//?You can write test file as
//first.test.js
//second.spec.js

//?folder structure
// - __test__ => all test file in this naming converstional folder structure

/*
if User is Component
User ->
1st file => User.js
1st Folder => __test__
under that folder you have that comp test file => User.test.js
*/

//?There are many testing file

// cypresss
// mocha
// enzyme

//!162-lec-3-Assertions in Jest: Writing Smart and Clear Test Cases

/*
In This Lecture we dived into the concept of assertions—understanding
how to compare the expected and received values to ensure our code behaves as intended.
We discussed how to write assertions effectively and how to structure your test suites and test cases for maximum clarity.
By the end of this session, you'll have a strong grasp of how to use Jest assertions to write smart and reliable test cases.
*/

// we have 3 test suits
// every suits have mutiple test  can happen

//?assertion => which write in callback
// In JavaScript, an assertion is a way to validate assumptions about your code's state or data at runtime. If an assertion fails, it typically indicates a bug or an unexpected condition that needs to be addressed.
// - its one kind of function or here we say matchers

//?Extension : jest runner

//?code
/*
describe("Will test all the number cases", () => {
    test("My first test file", () => {
        expect(2 + 2).toBe(4);
        expect(2 + 2).toBe(4);
        expect(2 + 2).toBe(4);
        expect(2 + 2).toBe(4);
    })
    it("My Second test file", () => {
        expect(3 + 3).toBe(6);
    })
})
*/

// so here describe , it ,test, expect,toBe  => predefine syntax part

// with extension install we can seprate option on above every test case that  run | debug => for seprate runner and debug

// this describe is the one of the method that we have => combined simillar test case in one group .  also when we run we can see what was the test case inside it in console

//!163-Lec-4-Testing Variables and Functions with Jest: A Simple Start

//-we discussed how to test variables and functions using Jest.We walked through a simple example so you can easily understand the basics.


//?Varibles and function can be used

//?second.spec.js
/*
let myVal = 3;
function add(x, y) {
    return x + y;
}
test("My Second test file", () => {
    expect(myVal).toBe(3)
    expect(add(2, 3)).toBe(5)
    expect(add(4, 3)).toBe(7)
})
*/


//?You Can Write 2 describe too.... in one test file

//?first.test.js
/*
describe("Will test all the number cases", () => {
    test("My first test file", () => {
        expect(2 + 2).toBe(4);
        expect(2 + 2).toBe(4);
        expect(2 + 2).toBe(4);
        expect(2 + 2).toBe(4);
    })
    it("My Second test file", () => {
        expect(3 + 3).toBe(6);
    })
})

describe("Another Describe", () => {
    let myLate = 3;
    test("Another Describe example", () => {
        expect(2 + 4).toBe(6);
        expect(myLate + myLate).toBe(6);

    })
})

*/


//!164-Lec-5-Using beforeEach and afterEach in Jest

//-we explored how to run code before and after your Jest test cases using beforeEach, afterEach, beforeAll, and afterAll .

//?Second.spec.js
/*

let myVal = 3;
function add(x, y) {
    return x + y;
}

//?Before Every Test Case
beforeEach(() => {
    console.log("beforeEach");
    val = 10;
});

//?After Every Test Case 
afterEach(() => {
    console.log("afterEach");
    val = 10;
});

//?Before  Every Test Case in file => one time sabse pehle
beforeAll(() => {
    console.log("before all");
})

//?After Every Test Case in file => one time sabse last
afterAll(() => {
    console.log("after all");
})

test("My First test file in second", () => {
    expect(myVal).toBe(3)
    expect(val).toBe(10)
    console.log("First Test");
})

test("My Second test file", () => {
    expect(myVal).toBe(3)
    expect(add(2, 3)).toBe(5)
    expect(val).toBe(10)
    console.log("second Test");
})


*/

//!165-Lec-6-Skipping Tests in Jest: Using only and skip

//-In this lecture, we explored how to use beforeAll and beforeEach with a real-life example to set up conditions before tests run.
//-We also covered how to use the only and skip keywords to focus on specific test cases or skip them when needed.

//?Scanrio : beforeEach and beforeAll

//?Code
/*
beforeEach(() => {
    console.log("beforeEach");
    val = 10;
})
test("My First test file in second", () => {
    expect(myVal).toBe(3)
    expect(val).toBe(10);
    val++;
    console.log("First Test");
})
*/

// - then we run the value impact on test case is same because after Every test case run the value back to 0
// - so i cant modify the value . i get same value after before run the intial value we get
// on this thing we have real life example of Array

//?CODE
/*
beforeEach(() => {
    console.log("beforeEach");
    val = 10;
    users = []
})
test("Should add a User", () => {
    users.push("Ajay")
    except(users).toContain("Ajay")
})
test("should not refrest the user value", () => {
    execPath(users.length).toBe(0)
})
    */

//? - but if you want that users value not be refresh then pass users in beforeAll and pass toBe(1)

//?CODE
/*
beforeEach(() => {
    console.log("beforeEach");
    val = 10;
})
beforeAll(() => {
    console.log("beforeAll");
    users = [];
})
test("Should add a User", () => {
    users.push("Ajay")
    except(users).toContain("Ajay")
})
test("should not refrest the user value", () => {
    execPath(users.length).toBe(1)
})
*/

//?NeW Matchers => toContain("Array")

//?CODE -> User.test.js
/*
jest.setTimeout(10000);
describe("User test case with example of only and skip", () => {
    test("first", () => {
        expect(2 + 2).toBe(4)
    }, 5000)
    test("second", () => {
        expect(2 + 2).toBe(4)
    }, 5000)
    test.skip("third", () => {
        expect(2 + 2).toBe(4)
    }, 5000)
})

*/

//skip => for ant test case you wanna skip
//only => if you wanna run only that test case to be run
//- in test syntax we have time also had  . so you can mention time and if the test case not run in that time period it will fail
//- you can remove specific time for all person time and give genric time to whole describe just like that => jest.setTimeout(10000)

//?CODE
// jest.setTimeout(10000)
// test("Async Function for timout", async () => {
//     await new Promise((resolve) => setTimeout(resolve, 2000))
//     expect(2 + 2).toBe(4)
// })

//?- if you do like this timeout exceeds and thats how it not work


//!166-Lec-7-Testing Loops in Jest: Running and Verifying Loops

//- we dove into how to handle loops in our Jest tests.We discussed how to run loops within test cases and verify their behavior, making sure we know how to test repetitive logic effectively.

//?CODE-THIRD.TEST.JS
/*

?Loops

let numbers = [1, 2, 3]
let numbers1 =
    [
        [1, 2, 3],
        [2, 2, 4],
        [4, 5, 9],
    ]

function add(x, y) {
    return x + y;
}

test.each(numbers)("First Loop - Add 2 to %i", (myNum) => {
    expect(add(2, myNum)).toBe(2 + myNum)
})

test.each(numbers1)("2d array in  Loop - Add %i to %i as %total", (a, b, total) => {
    expect(add(a, b)).toBe(total)
})
*/

//!167-Lec-8-Mastering Matchers in Jest

/*

- In this lecture, we've explored the various types of matchers available in Jest.
- By understanding these matchers, you can write smoother and more effective test cases for your functions.
- I've also shared a reference link where you can find a full list of matchers to help you out as you practice.

- Link - https://jestjs.io/docs/expect 

?CODE-fourth.test.js
/*

myVal = 4;
let name = "Ajay";
let animals = ["tiger", "Dog"]

test("fourth file", () => {
    expect(myVal).not.toBe(1)
    expect(myVal).toBeGreaterThanOrEqual(4);
    expect(name).toMatch(/ajay/i);
    expect(animals).toContain("tiger");

});

test("Object Assignemnt", () => {
    const data = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});
*/

//!168-Lec-9-Testing Truthy and Falsy Values in Jest

//- we focused on how to test Boolean values using Jest.
//- We covered the concepts of truthy and falsy values and how to effectively write tests that check these conditions.
//- This helps ensure that your functions behave as expected when dealing with different truthy or falsy inputs.

//?falsy value => "" , 0 , false , undefiend , null , Nan

//?Truthy Value => "Ajay" , 1

//?Code - truth.test.js

//!169-Lec-10-Handling Errors with Jest: Using toThrow Matcher

//- we learned how to test if a function throws an error using Jest's toThrow matcher.
//- This is especially useful for validating error handling scenarios in your code.
//- By the end of this session, you'll know how to confidently test and ensure your functions handle errors properly.

//?Code- error.test.js

//!170-Lec-11-Testing Your First React Component with React Testing Library

//- we’ve covered in detail how to confidently test a React component using React Testing Library.
//- You'll learn how to set up the code, follow the step-by-step process, and write your first test.
//- We also dive into how to use matchers in detail so you can verify your component’s behavior with confidence.

//?For react
//-Source - https://testing-library.com/docs/react-testing-library/intro


//?SetUp For installation
/*
? 1. Install Dependencies
- For React Testing Library + Vitest:
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event

- If you're using TypeScript, also add:
npm install --save-dev @types/jest


?2. Update vite.config.js Add the following test configuration:
/// <reference types="vitest" />gigit
import {defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // required for React components
    setupFiles: './src/setupTests.js',
  },
})

? 3. Create setupTests.js Inside src/ create a file called setupTests.js and add:
 import '@testing-library/jest-dom';

? 4. Write Your First Test
 Example: src/App.test.jsx

? 5. Add Test Script to package.json Add this under scripts:
 "test": "vitest"

? 6. Run the Tests Run the following command:
 npm run test

*/

//?CODE-App.test.jsx
// import { render } from "@testing-library/react"
// import App from "./App"
// import { expect, test } from "vitest";

// test("app component should display Hello Dipesh", () => {
//     const { getByText, debug } = render(<App />)
//     const HelloText = getByText("Hello Dipesh");
//     console.log(HelloText)  //? find whole DOM Node
//     debug(); //?can  get a text and debug
//     expect(HelloText.tagName).toBe("H1")
//     expect(HelloText.textContent).toBe("Hello Dipesh")
// })

//!171-Lec-12-Testing Button Functionality Inside a React Component

//- we covered how to test a button inside our component.
//- We also discussed a few helper functions like queryBy and getByText from our testing library.
//- We tried to understand these through practical examples.

//?1-difference between queryby  vs findby vs getby text
// queryby - give null if error comes
// getby - give specific error
//findby - mostly used in async await function

//?2-use of DOMnODE like this/........
// test("app component should display Hello Dipesh", () => {
//     const { getByText, debug } = render(<App />)
//     const HelloText = getByText("Hello Dipesh");
//     expect(HelloText).toBeTruthyValue()

//     expect(HelloText.tagName).toBe("H1")
//     expect(HelloText.textContent).toBe("Hello Dipesh")
// })

//?3-as per how u want the test case scenario that way we can chnage this thing

//?4.id
//?in App.jsx
// data-testid="heading" // you have to use this attribute data-testid
//?App.test.jsx
//const HelloTextId = getByTestId("heading");

//?5.button example
// getByRole use
// let btn = getByRole("button");
// fireEvent.click(btn)


//!172-Lec-13-Testing Components with useState Scenarios
// we focused on scenarios where we use useState inside a component.We tested how those state changes work in practice.

//?in this Lecture state test
// first our state is empty -> 1st test
// second we something add in state means update state => 2nd test

//?getByRole("input")
// - "textbox" we have to used for the input field
// getByRole("textbox")

//?CODE- App.jsx
// const [name, setName] = useState("");
// <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} />

//?CODE-App.test.jsx
/*
import { fireEvent, render } from "@testing-library/react"
import "@testing-library/jest-dom"; // ✅ important!
import App from "./App"
import { expect, test } from "vitest";


test("app component should display Hello Dipesh", () => {
  
    let myInput = getByRole("textbox")
    expect(myInput).toHaveValue("");
    fireEvent.change(myInput, { target: { value: "Ajay" } })
    expect(myInput).toHaveValue("Ajay");

    ?for case-insensitive check
     expect(myInput.value).toMatch(/AjaY/i);
     toHaveValue() is strict — it expects exact primitive(string or number)
     toMatch() is designed for regex and string pattern checks

})   

*/

//!173-Lec-14-Project: Test Login Page and UI Elements

//- we dive into end-to-end testing of a login functionality. We’ll use all the helper functions we’ve learned so far, making sure you get a hands-on feel of how to apply them in a real-world scenario.

