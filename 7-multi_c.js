const input = process.argv.slice(2);

let num = parseInt(input[0]);

if (isNaN(num) || num < 0){
    console.log("Missing number of occurrences");
}
else {
    for (let i = 0; i < num; i++){
        console.log("C is fun");
    }
}
//----------------------------------
//anotehr solution i developed
let multis = process.argv.slice(2);
multis = parseInt(multis[0]);
if (Number.isNaN(multis)) {
  console.log("Missing Number of occurences");
} else {
  for (let i = 0; i < multis; i++) {
    console.log(`C is fun`);
  }
}
