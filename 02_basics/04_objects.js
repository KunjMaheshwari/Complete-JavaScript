// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Kunj Maheshwari";
tinderUser.isLoggedIn = "false";

// console.log(tinderUser);

const regularUser = {
    email: "kunjm@outlook.com",
    fullName: {
        userfullName: {
            firstName: "Kunj",
            lastName: "Maheshwari",
        }
    }
}

// console.log(regularUser.fullName?.userfullName.firstName);

const obj1 = {
    1: "a",
    2: "b",
}

const obj2 = {
    3: "c",
    4: "d",
}

const obj3 = Object.assign({}, obj1, obj2);

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "kunjm@outlook.com",
    },
    {
    },
    {
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));