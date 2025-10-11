
function check() {
    throw new Error("Fatal Mistake")
}
test("Check Function - Error Handling", () => {
    expect(check).toThrow()
    expect(check).toThrow("Fatal Mistake")
    expect(check).toThrow(/fatal/i)
    expect(check).toThrow(/Fatal/)
    //=> if you wanan a psss onlyone word jaise ke waise pass karo /Name/
    //=> if case sensitive bannana hai to i  = /Name/i
})