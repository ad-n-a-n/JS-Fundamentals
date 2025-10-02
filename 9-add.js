let ab =  process.argv.slice(2);
let a = parseInt(ab[0]);
let b = parseInt(ab[1]);

function add(a,b){
    return a + b;
}
console.log(add(a,b));