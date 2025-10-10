
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
    users = [];
})

//?After Every Test Case in file => one time sabse last
afterAll(() => {
    console.log("after all");
})

test("My First test file in second", () => {
    expect(myVal).toBe(3)
    expect(val).toBe(10);
    val++;
    console.log("First Test");
})

test("My Second test file", () => {
    expect(myVal).toBe(3)
    expect(add(2, 3)).toBe(5)
    expect(val).toBe(10)
    console.log("second Test");
})

test("Should add a User", () => {
    users.push("Ajay")
    expect(users).toContain("Ajay")
})
test("should not refrest the user value", () => {
    expect(users.length).toBe(1)
})