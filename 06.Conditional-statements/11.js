function num(input){
let number = Number(input[0]);

if(number >= 100 && number <= 200 || number === 0){
console.log('valid');
} else {
  console.log('invalid');
}
}
num(['75']);