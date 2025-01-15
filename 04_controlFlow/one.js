// if

const isUserLoggedIn = true;
if (isUserLoggedIn) {
    // scope.
}

/*
<, >, <=, >=, ==, !=, ===
*/

if (2 == "2") {
    console.log("Printing");
}

if (2 === "2") { // this is called strict equals.
    console.log("Printing 2");
}

const temperature = 41;
if(temperature < 50){
    console.log("less than 50");
}else{
    console.log("greater than 50");
}

const score = 200;

if(score > 100){
    const power = "fly";
    console.log(`User Power ${power}`);
}

const balance = 1000;

if(balance > 500) console.log("Test");

if(balance < 500){
    console.log("Less than.");
}else if(balance < 750){
    console.log("Less than 750");
}else{
    console.log("Greater than 750");
}


const userLoggedIn= true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// logical operators
if(userLoggedIn && debitCard){
    console.log("User is allowed to buy the course.");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged In");
}