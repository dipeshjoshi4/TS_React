
//!---------------------Module 12: Testing React applications Using Jest------------------

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