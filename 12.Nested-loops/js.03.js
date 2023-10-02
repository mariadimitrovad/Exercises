function solve(input){
let index = 0;
let command = input[index++];
let primeSum = 0;
let oddSum = 0;

while(command !== 'stop'){

  let commandAsNum = Number(command);

  if(commandAsNum < 0){
    console.log(`Number is negative.`);
    command = input[index++];
    continue;
  }

  let isPrime = true;

  for(let divider = 2; divider < commandAsNum; divider++){
    if(commandAsNum % divider === 0){
      isPrime = false;
      break;
    }
  }

  if(isPrime){
    primeSum += commandAsNum;
  } else {
    oddSum += commandAsNum;
  }

  command = input[index++];
}

console.log(`Sum of all prime numbers is: ${primeSum}`);
console.log(`Sum of all non prime numbers is: ${oddSum} `);
}
solve(['-1',"2","9","0","7","19","4","stop"]);





