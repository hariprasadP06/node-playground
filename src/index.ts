import calculator from "./calcu";

const calc = new calculator();

const sum = calc.add(1, 2);
const subb = calc.sub(5, 2);
const mull = calc.mul(8, 2);
const divv = calc.div(25, 2);

console.log(`Sum: ${sum}`);
console.log(`Sub: ${subb}`);
console.log(`Mul: ${mull}`);
console.log(`Div: ${divv}`);
