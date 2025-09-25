// const inputs = process.argv.slice(2);

// for (input of inputs) {
//     // console.log(input)
//   if (input[0]) {
//     console.log("No argument");
//   } else {
//     console.log(input);
//   }
// }

const input = process.argv.slice(2);

if (input[0]) {
  console.log(input[0]);
} else {
  console.log("No argument");
}
