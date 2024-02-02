// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
let a = userInput[0].split(" ");
let b = userInput[1].split(" ");
let count = [];
let array = [];
let n = +a[0];
let k = +a[1];
let i = 0;
while(i<n){
    array.push(+b[i]);
    i++;
}for (j = 0 ; j<array.length ; j++){
if( k === array[j] ){
 count.push(array[j]);
}
}if(count.length === 0){
    console.log("-1");
}else
console.log(count.length-1);
  //end-here
});