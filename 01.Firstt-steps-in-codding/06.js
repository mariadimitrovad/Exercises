function details(input){
let firstName = input[0];
let secondName = input[1];
let age = Number(input[2]);
let town = input[3];

console.log(`You are ${firstName} ${secondName}, a ${age}-years old person from ${town}.`);
}
details(['Maria', 'Dimitrova', '23', 'Tarnovo']);