function solve(input){
let primeSum = 0;
let notPrimeSum = 0;

let index = 0;
let command = input[index];
index++;

while(command !== 'stop'){
  let curNum = Number(command);

  if(curNum < 0){
    console.log(`Number is negative.`);
    command = input[index];
    index++;
    continue;
  }

  let isPrime = true;

  for (let divider = 2; divider < curNum; divider++){
    if(curNum % divider === 0){
      isPrime = false;
      break;
    }
  }

  if (isPrime){
    primeSum += curNum;
  } else {
    notPrimeSum += curNum;
  }
}
console.log(`Sum of all primer number is: ${primeSum}`);
console.log(`Sum of all non primer number is: ${notPrimeSum}`);
}
solve(["3","9","0","7","19","4","stop"]);