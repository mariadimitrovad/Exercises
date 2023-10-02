function bonusPoints (input){
let startPoints = Number(input[0]);
let bonus = 0;

if(startPoints <= 100){
  bonus = 5;
} else if(startPoints > 100){
  bonus = 0.20 * startPoints;
} else if(startPoints > 1000){
  bonus = 0.10 * startPoints;
}

if(startPoints % 2 === 0){
  bonus++;;
} else if (startPoints % 10 === 5){
  bonus += 2;
}

console.log(bonus);
console.log(startPoints + bonus);
}
bonusPoints(['20']);