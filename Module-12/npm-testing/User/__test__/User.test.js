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