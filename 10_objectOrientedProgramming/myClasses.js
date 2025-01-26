// ES6

class User {
    constructor(userName, email, password){
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    encryptedPassword(){
        return `${this.password} abc`;
    }

    changeUserName(){
        return `${this.userName.toUpperCase()}`
    }
}

const chai = new User("Kunj", "Kunj@gmail.com", "123");
console.log(chai.encryptedPassword());
console.log(chai.changeUserName());
