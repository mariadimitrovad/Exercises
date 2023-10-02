function solve(input) {
  let index = 0;
  let command = input[index++];

  let primeSum = 0;
  let notPrimeSum = 0;

  while (command != "stop") {
    command = Number(command);

    let isPrime = true;

    if (command < 0) {
      console.log(`Number is negative.`)
      command = input[index++];
      continue;
    }

    for (let divider = 2; divider < command; divider++) {
      if (command % divider === 0) {
        isPrime = false;
        break;
      }
    }

    if(isPrime){
      primeSum += command;
    } else {
      notPrimeSum += command;
    }

    command = input[index++];
  }
  console.log(`Sum of all prime numbers is: ${primeSum}`);
  console.log(`Sum of all non prime numbers is: ${notPrimeSum}`);
}
solve(["3", "9", "0", "7", "19", "4", "stop"]);

