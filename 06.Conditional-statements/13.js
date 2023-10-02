function comisions(input){
let town = input[0];
let volumeSale = Number(input[1]);

let comision = 0;

switch (town){
  case 'Sofia':
    if(volumeSale <= 500){
      comision = 0.05 * volumeSale;
    } else if (volumeSale <= 1000){
      comision = 0.07 * volumeSale;
    } else if(volumeSale <= 10000){
      comision = 0.08 * volumeSale;
    } else if (volumeSale > 10000){
      comision = 0.12 * volumeSale;
    }
    break;
    case 'Varna':
      if(volumeSale <= 500){
        comision = 0.4 * volumeSale;
      } else if (volumeSale <= 1000){
        comision = 0.07 * volumeSale;
      } else if(volumeSale <= 10000){
        comision = 0.10 * volumeSale;
      } else if (volumeSale > 10000){
        comision = 0.13 * volumeSale;
      }
      break;
      case 'Plovdiv':
        if(volumeSale <= 500){
          comision = 0.05 * volumeSale;
        } else if (volumeSale <= 1000){
          comision = 0.08 * volumeSale;
        } else if(volumeSale <= 10000){
          comision = 0.12 * volumeSale;
        } else if (volumeSale > 10000){
          comision = 0.14 * volumeSale;
        }
        break;
        default:
          console.log('error');
}
console.log(comision.toFixed(2));
}
comisions(['Sofia','1500']);