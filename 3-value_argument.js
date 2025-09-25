// const input = process.argv.slice(2);

// if (input.length === 1) {
//   console.log("Argument found");

// }
// else if (input.length > 1){
//     console.log("Arguments found");
// }
//  else {
//   console.log("No argument");
// }

const input = process.argv.slice(2);

if (!input.length) {
    console.log("No argument");
}
else if (input.length === 1){
    console.log("Argument found");
}
else {
    console.log("Arguments found")
}