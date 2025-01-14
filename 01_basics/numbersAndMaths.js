const score = 400;

const balance = new Number(100);
console.log(balance); // object

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(2));

const hundreds = 1000000;
console.log(hundreds.toLocaleString());


console.log(Math.abs(-4));
console.log(Math.round(4.3));

console.log(Math.ceil(4.2));
console.log(Math.floor(4.3));

console.log(Math.min(3, 2, 1));
console.log(Math.random()); // value between 0 and 1
console.log(Math.floor(Math.random()*10));

const min = 10;
const max = 20;

console.log(Math.random() * (max-min+1));