function days(input){
let day = input[0];
let ticket = 0;

switch(day){
  case 'Monday': 
  case 'Tuesday': 
  case 'Friday':
  ticket = 12;
  break;
  case 'Wednesday':
    case 'Thursday':
      ticket = 14;
      break;
      case 'Saturday':
        case 'Sunday':
          ticket = 16;
}

console.log(ticket);
}
days(['Monday']);