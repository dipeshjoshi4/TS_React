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