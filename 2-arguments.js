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

//my second solution
const input = process.argv.slice(2);

if (!input.length) {
  console.log("No argument");
} else if (input.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}

//chatGPT solution
const args = process.argv.slice(2);

console.log(
  args.length === 0
    ? "No argument"
    : args.length === 1
    ? "Argument found"
    : "Arguments found"
);
