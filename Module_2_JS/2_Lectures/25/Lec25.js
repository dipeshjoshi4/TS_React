
//?name exports -> export multiple things with their names

//?default exports -> export one main thing from the file

const add = (a, b) => a + b;
const Mul = (a, b) => a * b;

export { add, Mul }

//?Derfault example

export default function greet(name) {
    return `hello ${name}`;
}