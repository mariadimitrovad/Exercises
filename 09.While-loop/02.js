function pass(input){
let name = input[0];
let password = input[1];
let data = input[2]
let index = 3;

while(data !== password){
  index++;
  data = input[index];
}

console.log(`Welcome ${name}!`);
}
pass(["Nakov",
"1234",
"Pass",
"1324",
"1234"]);