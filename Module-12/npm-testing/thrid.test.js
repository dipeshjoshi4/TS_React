
//Loops
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