const inputs = process.argv.slice(2);
let num = parseInt(Number(inputs[0]));

if (!isNaN(num)){
    console.log(`My number: ${num}`)
}
else {
    console.log("Not a number")
}
