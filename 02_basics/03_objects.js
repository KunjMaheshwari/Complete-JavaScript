// singleton - if object is created using constructor then it is a singleton.

// object literals
// Object.create

const mySym = Symbol("key1"); // interview question

const JsUser = {
    name: "Kunj",
    "full name": "Kunj Maheshwari",
    [mySym] : "myKey1",
    age: 22,
    location: "Vidisha",
    email: "kunjm@outlook.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondays", "Saturdays"]
}

// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "kunj1766@gmail.com";
// Object.freeze(JsUser);

// console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello js users");
}

JsUser.greetingsTwo = function(){
    console.log(`Hello Js user,  ${this.name}`);
}

console.log(JsUser.greetings());

console.log(JsUser.greetingsTwo());