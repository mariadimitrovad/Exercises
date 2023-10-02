function christmas(input){
let index = 0;
let age = input[index];
index++;

let over16Years = 0;
let to16Years = 0;
let toy = 0;
let pullover = 0;

while(age !== 'Christmas'){
let newAge = Number(age);

if(age <= 16){
  to16Years++;
  toy++;
} else if(age >= 16){
  over16Years++;
  pullover++;
}

age = input[index];
index++;
}

let totalPulloverPrice = 15 * pullover;
let totalToysPrice = 5 * toy;

console.log(`Number of adults: ${over16Years}`);
console.log(`Number of kids: ${to16Years}`);
console.log(`Money for toys: ${totalToysPrice}`);
console.log(`Money for sweaters: ${totalPulloverPrice}`);

}
christmas(["16",
"20",
"46",
"12",
"8",
"20",
"49",
"Christmas"])
