
let OriginalObject = {
    name: "zavier",
    adress: { city: "Mumbai" },
}

let shadowCopy = {
    ...OriginalObject
}

console.log(shadowCopy);