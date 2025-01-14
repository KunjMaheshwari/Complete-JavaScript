//var c = 300;

let a = 300;

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("Inner "+ a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const userName = "Kunj";
    function two(){
        const websites = "Youtube";
        console.log(userName);
    }
    // console.log(websites);
    two();
}

// one();

if(true){
    const userName = "Kunj Maheshwari";
    if(userName === "Kunj Maheshwari"){
        const website = " youtube";
        // console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);


// +++++++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++

function addOne(value){
    value += 1;
    return value;
}

console.log(addOne(3));

// console.log(addTwo(5)); // cannot access because of hoisting.

const addTwo = function(num){
    return num + 2;
}