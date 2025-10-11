jest.setTimeout(10000);
describe("User test case with only and skip", () => {

    test("first", () => {
        expect(2 + 2).toBe(4)
    }, 5000)

    test("second", () => {
        expect(2 + 2).toBe(4)
    }, 5000)

    test.skip("third", () => {
        expect(2 + 2).toBe(4)
    }, 5000)

    test("Async Function for timout", async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        expect(2 + 2).toBe(4)
    })

})