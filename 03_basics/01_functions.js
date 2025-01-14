function sayMyName() {
    console.log("Kunj Maheshwari");
}

// sayMyName();

function addTwoNumbers(num1, num2){ // parameters
    let result = num1+num2;
    return result;
}
 
// const result = addTwoNumbers(3, 4); // arguments
// console.log(result);

function loginUserMessage(userName = "Kunj"){
    if(!userName){
        console.log("Please enter a valid username");
        return;
    }
    return `${userName} just logged in`;
}

// console.log(loginUserMessage("Kunj"));

// console.log(loginUserMessage());

function calculateCardPrice(val1, val2, ...num1){ // Rest Operator
    return num1;
}

console.log(calculateCardPrice(200, 400, 500, 2000));

const user = {
    userName: "Kunj", 
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}

// handleObject(user);
// handleObject({
//     userName: "sam", 
//     price: 300
// })

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));