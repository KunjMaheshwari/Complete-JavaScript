// arrays

const myArr = [0, 1, 2, 3, 4, 5];

const myHeros = ["ironman", "spiderman"];

const myArr2 = new Array(1, 2, 3, 4, 5);
// console.log(myArr[0]);

// console.log(myArr2);

myArr.push(6);
// console.log(myArr);

myArr.push(7);
// console.log(myArr);

// console.log(myArr.indexOf(3));


const newArr = myArr.join(); // converts the values into String.

// console.log(newArr);

// slice and splice
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);

console.log("C ", myArr);