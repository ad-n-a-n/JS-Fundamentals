const inputs = process.argv.slice(2);

if (Number(inputs[0])){
    console.log(`My number: ${inputs[0]}`)
}
else {
    console.log("Not a number")
}
