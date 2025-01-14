let myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());

console.log(typeof(myDate));

let myCreatedDate = new Date("2002-12-20");

console.log(myCreatedDate.toLocaleDateString());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "short"
})