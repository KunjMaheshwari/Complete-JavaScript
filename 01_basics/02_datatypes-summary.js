// Type 1 - Primitive data types

/*
1. String 
2. Boolean 
3. Number 
4. Integer
5. Null
6. Undefined
7. Symbol
*/

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;

const userEmail = undefined;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id == anotherId);

const bigNumber = 62728291;


// Type 2 - Non Primitive Data type or Reference Type

/*
1. Arrays
2. Objects
3. Functions
*/

const heros = ["Kunj", "Manan", "Hitesh"];
let obj = {
    name: "Kunj Maheshwari", 
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}