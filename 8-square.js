// let square = process.argv.slice(2);
// square = parseInt(square[0]);

// if (Number.isNaN(square)){
//     console.log("Missing size");
// }
// else {
//     for (let i = 0; i < square; i++){
//         console.log("X".repeat(square));
//         // for (let j = 0; j < i; j++){
//         //     console.log("X".repeat(square));
//         // }
//     }
// }

//-----------------------
//beginner solution

let square = process.argv.slice(2);
square = parseInt(square[0]);

if (Number.isNaN(square)){
    console.log("Missing size");
}
else {
    for (let i = 0; i < square; i++){
        let input = "";
        for (let j = 0; j < square; j++){
            input = input + "X";
        }
    console.log(input);
    }
}