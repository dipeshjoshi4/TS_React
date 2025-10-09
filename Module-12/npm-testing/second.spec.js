
let myVal = 3;
function add(x, y) {
    return x + y;
}

test("My Second test file", () => {
    expect(myVal).toBe(3)
    expect(add(2, 3)).toBe(5)
    expect(add(4, 3)).toBe(7)
})
