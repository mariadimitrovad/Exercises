function solve(input){
  let index = 0;
  let command = input[index++];

  let standardTicket = 0;
  let kidTicket = 0;

  while(command != 'Finish'){
    let movieName = command;
    let freePlaces = Number(input[index++]);

    let typeTicket = input[index++];

    let takenPlaces = 0;

   while(typeTicket !== 'End'){
    takenPlaces++;
    
    if(typeTicket === 'student'){
      studentTicket++;
    } else if(typeTicket === 'standard'){
      standardTicket++;
    } else if(typeTicket === 'kid'){
      kidTicket++;
    }

    if(takenPlaces === freePlaces){
      break;
    }

    typeTicket = input[index++];
   }

   let percentFull = (takenPlaces / freePlaces) * 100;
  console.log(`${movieName} - ${percentFull.toFixed(2)}% full.`);

  command = input[index++];
  }

  let totalTickets = standardTicket + studentTicket + kidTicket;
  console.log(`Total tickets: ${totalTickets}`);

  let percentStudentTick = (studentTicket / totalTickets) * 100;
  let percentStandardTick = (standardTicket / totalTickets) * 100;
  let percentKidTick = (kidTicket / totalTickets) * 100;

  console.log(`${percentStudentTick.toFixed(2)}% student tickets.`);
  console.log(`${percentStandardTick.toFixed(2)}% standard tickets.`);
  console.log(`${percentKidTick.toFixed(2)}% kids tickets.`);
}
solve([
"Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"]);