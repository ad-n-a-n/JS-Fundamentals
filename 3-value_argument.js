const input = process.argv.slice(2);

if (input.length === 1) {
  console.log("Argument found");

}
else if (input.length > 1){
    console.log("Arguments found");
}
 else {
  console.log("No argument");
}
