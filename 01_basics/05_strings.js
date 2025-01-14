const name = "Kunj Maheshwari";

const repoCount = 50;

// console.log(name + " "+repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Adibzak");

console.log(gameName);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(1));
console.log(gameName.indexOf('z'));

const newString = gameName.substring(0, 3);
console.log(newString);

const anotherString = gameName.slice(0, 4);
console.log(anotherString);

const newStringOne = "      kunj            ";
console.log(newStringOne.trim());

const url = "https://kunjm.%20vercel.com";

console.log(url.replace('%20', ''));

console.log(url.includes("kunj"));