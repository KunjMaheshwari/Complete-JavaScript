const coding = ["js", "java", "python", "c++"];

// Higher order function 
// coding.forEach(function (i){
//     console.log(i);
// })

// coding.forEach((item) =>{
//     console.log(item);
// });

function printMe(item){
    // console.log(item);
}

coding.forEach(printMe);

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript", 
        languageFileName: "js"
    },
    {
        languageName: "java programming",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) =>{
    // console.log(item.languageName);
    console.log(item.languageFileName);
})