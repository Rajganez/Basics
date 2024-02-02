/* // Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => { */
  //start-here
  //Your code goes here … replace the below line with your code logic 

 let a = +userInput[0];
let b = userInput[1].split(" ");
let array = [];
let final = [];
let j = 0;
let i = 0 ;
while(j<a){
    array.push(+b[j]);
    j++;
}
while (i<array.length-1){
let temp = array[i+1];
let temp1 = array[i];
final.push(temp,temp1);
i = i+2;
}
if(final.length<array.length){
final.push(array[i]);
}
console.log(final.join(" "));

  //end-here
//});








