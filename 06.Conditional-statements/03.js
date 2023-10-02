function animal(input){
let theAnimal = input[0];

switch (theAnimal){
  case 'dog':
    console.log('mammal');
    break;
    case 'crocodile':
      case 'tortoise':
        case 'snake':
          console.log('reptile');
          break;
          default:
            console.log('unknown');
          
}
}
animal(['dog']);