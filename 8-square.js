let square = process.argv.slice(2);
square = parseInt(square[0]);

if (Number.isNaN(square)){
    console.log("Missing size");
}
else {
    let output = "";
    for (let i = 0; i < square; i++){
        output = output + "x"
        for (let j = 0; j < i; j++){
            // console.log("X");
        console.log(output);
        }
    }
    console.log(output);
}