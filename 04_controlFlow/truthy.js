// const userEmail = "kunjm@outlook.com";
const userEmail = [];

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Enter the email");
}

/*
    Falsy values
    false, 0, -0, BigInt 0n, "", null, undefined, NaN

    Truthy values
    true, "0", 'false', " ", [], {}, function(){}
*/

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10

console.log(val1);
console.log(val1);

// Terniary Operator

condition ? true : false;