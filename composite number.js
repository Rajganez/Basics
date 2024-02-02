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
let num = userInput[0];
if(num % 5 === 0 && num !== 5){
    console.log("no");
}else if(num % 2 ===0 && num !== 2) {
    console.log("yes");
}else if(num %3 ===0 && num !== 3){
    console.log("yes");
}else{
    console.log("no");
}

  //end-here
});