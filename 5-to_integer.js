// const inputs = process.argv.slice(2);
// let num = parseInt(Number(inputs[0]));

// if (!isNaN(num)){
//     console.log(`My number: ${num}`)
// }
// else {
//     console.log("Not a number")
// }

// the above program worked correctly but Number keyword is not needed (chatGPT correction)
const inputs = process.argv.slice(2);
let num = parseInt(inputs[0]);

if (!isNaN(num)){ //isNaN is used specifically to test for cases like 0, without it, it will return Not a number for 0
    console.log(`My number: ${num}`)
}
else {
    console.log("Not a number")
}
