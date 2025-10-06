
//!---------------------Module 12: Testing React applications Using Jest------------------

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

//?3 Types
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

//?Why jest is test runner only ?