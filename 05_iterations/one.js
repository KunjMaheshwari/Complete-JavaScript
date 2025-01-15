// for loop


for(let i = 0; i< 10;i++){
    const element = i;
    if(element == 5){
        // console.log("5 is the best number");
    }
    // console.log(element);
}

let heros = ["flash", "batman", "superman"];
for(let i = 0;i<heros.length;i++){
    // console.log(`Outer loop value: ${i}`);
    // for(let j = 0;j<=10;j++){
    //     // console.log(`Inner loop value ${j}`);
    //     console.log(i + '*' + j + '=' + i*j);
    // }
    const element = heros[i];
    // console.log(element);
}

// break and continue

for(let index = 1;index <= 20;index++){
    if(index == 5){
        console.log("Detected 5");
        break;
    }
    console.log(`Value of i is ${index}`);
}