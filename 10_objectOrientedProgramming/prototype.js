// let myName = "Kunj    ";
// console.log(myName.truelength);

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.kunj = function(){
    console.log("Kunj is present in all objects");
}

heroPower.kunj();

let heros = ["Kunj", "Manan", "Prakhar"];
heros.kunj();


Array.prototype.heyKunj = function(){
    console.log("Kunj says Hello");
}

heros.heyKunj();

// inheritance
const User = {
    name: "chai",
    email: "chai@gmail.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Chai aur code      ";

String.prototype.trueLength = function(){
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}