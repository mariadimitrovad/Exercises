function skiTrip(input){
let daysStay = Number(input[0]);
let typeRoom = input[1];
let grade = input[2];

let nights = daysStay - 1;
let totalPrice = 0;

switch(typeRoom){
  case 'room for one person':
    totalPrice = 18 * nights;
    break;

    case 'apartment':
      totalPrice = 25 * nights;
      if(nights < 10){
        totalPrice *= 0.70;
      } else if (nights <= 15){
        totalPrice *= 0.65;
      } else if (nights > 15){
        totalPrice *= 0.50;
      }
      break;

      case 'president apartment':
        totalPrice = 35 * nights;
        if(nights < 10){
          totalPrice *= 0.90;
        } else if (nights <= 15){
          totalPrice *= 0.85;
        } else if(nights > 15){
          totalPrice *= 0.80;
        }
        break;
}

if (grade === 'positive'){
  totalPrice *= 1.25;
} else if(grade === 'negative'){
  totalPrice *= 0.90;
}
console.log(totalPrice.toFixed(2));
}
skiTrip([
"14",
"apartment",
"positive"]);