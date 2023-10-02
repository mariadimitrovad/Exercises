function vacationBookList(input){
let pagesCount = Number(input[0]);
let pagesPerHour = Number(input[1]);
let daysForReading = Number(input[2]);

let totalTimeReading = pagesCount / pagesPerHour;

let hoursNeededPerDay = totalTimeReading / daysForReading;

console.log(hoursNeededPerDay);
}
vacationBookList(["212 ",
"20 ",
"2 "]);