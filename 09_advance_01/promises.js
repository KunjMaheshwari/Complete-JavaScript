// fetch('https://something.com').then().catch().finally();

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB Calls, network calls, etc
    setTimeout(function(){
        console.log("Async Task is completed");
        resolve();
    }, 1000);
})

promiseOne.then(() =>{
    console.log("Promise consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Aysnc 2 resolved");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName: "Kunj", email: "kunjm@outlook.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({userName: "Kunj", email: "kunjm@outlook.com"})
        }else{
            reject("ERROR: Something went wrong");
        }
    }, 2000);
})

promiseFour
.then((user) =>{
    console.log(user);
    return user.userName;
})
.then((username) =>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("Code executed.");
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(error){
            resolve({userName: "javascript", password : "1234"});
        }else{
            reject("ERROR: JavaScript went wrong");
        }
    }, 1000);
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive
    console.log(response);
    }catch{
        console.log(error);
    }
}

consumePromiseFive();


async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (e) {
        console.log("Error", e);
    }
};

getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) =>{console.log(data)})
.catch((error) =>{
    console.log(error);
})