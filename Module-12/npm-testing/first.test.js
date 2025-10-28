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

describe("Another solutions 3", () => {
    let myVar = 6;
    expect(6 + 12).toBe(18);
    expect(myVar + myVar).toBe(12)
})

