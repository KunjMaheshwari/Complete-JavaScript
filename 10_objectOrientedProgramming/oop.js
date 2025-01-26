const user = {
    userName: "Kunj",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        console.log("Got User details from Database");
        console.log(`Username: ${this.userName}`);
    }
}

// console.log(user.userName);
// console.log(user.getUserDetails());

const promiseOne = new Promise(function (resolve, reject) { });

const date = new Date();

function User(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this;
}

const userOne = new User("Kunj", 12, true);
const userTwo = new User("Manan", 12, false);

console.log(userOne);
console.log(userTwo);