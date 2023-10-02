function sums(input){
let num = Number(input[0]);

let numAsStr = num.toString();
let sum = 0;

for(let i = 0; i < numAsStr.length; i++){
  let curNum = Number(numAsStr[i]);
   
  sum += curNum;
}
console.log(sum);
}
sums(['1234']);