/* // Getting input via STDIN
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
  //Your code goes here … replace the below line with your code logic  */
let a = userInput[0];
let b = a.split(" ");
let arr=[];
let result = "";
let fin = "";
let i = 0;
for (let j = 0 ; j<10 ; j++){
 arr.push(+b[j]);   
}
while (i<=arr.length){
  i++;
 let temp = arr[0];
  let temp1 = arr[i];
if (temp === temp1){
    fin = temp;
    result = temp1;
}
else if (temp > temp1){
  result = temp1;
}
else if(result < temp){
 fin = result; 
}
}
if(fin < result){
 console.log(fin); 
}else{
console.log(result);
}
  //end-here
//});