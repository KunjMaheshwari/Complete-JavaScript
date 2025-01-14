let score = "33abc";

console.log(score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber); // NaN - Not a Number

/*
 "33" => 33
 "33abc" => NaN
 true = 1; false => 0
*/

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false

// "Kunj" => true
// "" => false

let value = 3;

let negValue = -value;
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%3);

let str1="Kunj";
let str2 = "Maheshwari";

let result = str1+str2;

console.log(result);

console.log("1"+2+2);
console.log(1+2+"2");

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);