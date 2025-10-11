
//?falsy value => "" , 0 , false , undefiend , null , Nan

//?Truthy Value => "Ajay" , 1

let p = "Ajay";
let a = "";
let q = "Dipesh";

test("Should Check Truthy Value-1", () => {
    expect(a).toBeTruthy();
})

test("Should Check Truthy Value-2", () => {
    expect(p).toBeTruthy();
})

test("Should Check Truthy Value-3", () => {
    expect(a).not.toBeTruthy();
})

test("Should Check Truthy Value-4", () => {
    expect(a).toBeFalsy();
})

let b;

test("Should Check Truthy Value-5", () => {
    expect(b).toBeFalsy();
})

//not defiend means undefined but for that we have matcher

test("Should Check Truthy Value-5", () => {
    expect(b).toBeUndefined();
})

//for defiend
let z = "xyz";
test("Should Check Truthy Value-6", () => {
    expect(z).toBeDefined();
})

//?For Null

let m = null;
test("Should Check Truthy Value-6", () => {
    expect(m).toBeDefined();
    expect(m).toBeNull();
    expect(m).toBeFalsy();
})