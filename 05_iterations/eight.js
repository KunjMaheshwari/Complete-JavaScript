const myNums = [1,2,3];

// const myTotal = myNums.reduce((acc, currVal) =>{
//     console.log(`Accumulator: ${acc} and CuurentValue: ${currVal}`);
//     return acc + currVal;
// }, 0);

// console.log(myTotal);

const shopppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python name",
        price: 999
    }, 
    {
        itemName: "mobile Dev",
        price: 5000
    }
]

const priceToPay = shopppingCart.reduce((acc, item) =>{
    return acc + item.price
}, 0);

console.log(priceToPay);