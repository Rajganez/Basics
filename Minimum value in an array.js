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

  // Using first index of an array finding the minimum value in an array
let a = userInput[0];
let b = a.split(" ");
let arr=[];
let result = "";
let fin = "";
let i = 0;
for (let j = 0 ; j<10 ; j++){
 arr.push(+b[j]); //Pusing input from user into an array of 10 index   
}
while (i<=arr.length){
  i++;
 let temp = arr[0]; //Assaining the first element of the array
  let temp1 = arr[i]; //Assigning the elements through iterating the array
if (temp === temp1){ // If the value of the array is same as [1,1,1,...]
    fin = temp;
    result = temp1;
}
else if (temp > temp1){ // assign minimum value in result variable
  result = temp1;
}
else if(result < temp){ // assing minimum value in fin variable if the first element is minimum
 fin = result; 
}
}
if(fin < result){ // display the result
 console.log(fin); 
}else{            // display the result
console.log(result);
}
  //end-here
//});