const user = {
    userName: "Kunj",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, Welcome to the website.`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.userName = "Sam";
// user.welcomeMessage();

// function chai(){
//     let userName = "Kunj Maheshwari";
//     console.log(this.userName);
// }

// chai();

// this keyword is never used inside the function it will give you undefined. this keyword is always used inside the objects.

// const chai = () => {
//     let userName = "Kunj Maheshwari";
//     console.log(this.userName);
// }

// chai(); // undefined.

// const addTwo= (num1, num2) =>{ // implicit return 
//     return num1+num2;
// }

// explicit return 
const addTwo = (num1, num2) => (num1+num2);

// console.log(addTwo(1, 2));

