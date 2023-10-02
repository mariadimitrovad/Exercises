function nums(input){
let maxNum = Number.MIN_SAFE_INTEGER;
let index = 0;
let num = input[index];

while(num !== 'Stop'){
  let numAsNum = Number(num);
  
  if(numAsNum > maxNum){
    maxNum = numAsNum;
  }

  index++;
  num = input[index];
}
console.log(maxNum);
}
nums(["100",
"99",
"80",
"70",
"Stop"]);