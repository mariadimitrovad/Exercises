function compRoom(input){
let month = input[0];
let hoursInAction = Number(input[1]);
let peopleCount = Number(input[2]);
let dayTime = input[3];

let pricePerHour = 0;
let totalPrice = 0;
let priceForDay = 0;

switch(month){
  case 'march':
    case 'april':
      case 'may':
        if(dayTime === 'day'){
          priceForDay = 10.50 * hoursInAction;
        } else if (dayTime === 'night'){
          priceForDay = 8.40 * hoursInAction;
        }
        break;
        case 'june':
          case 'july':
            case 'august':
              if(dayTime === 'day'){
                priceForDay = 12.60 * hoursInAction;
              } else if(dayTime === 'night'){
                priceForDay = 10.20 * hoursInAction;
              }
              break;
}

if(peopleCount >= 4){
  priceForDay *= 0.90;
}

if(hoursInAction >= 5){
  priceForDay *= 0.50;
}

totalPrice = priceForDay * peopleCount;
pricePerHour = priceForDay / peopleCount;

console.log(`Price per person for one hour: ${pricePerHour.toFixed(2)} `);
console.log(`Total cost of the visit: ${totalPrice.toFixed(2)}`);
}
compRoom(['march','3','3','day']);