function names(input){
let index = 0;
let name = input[index];

while(name !== 'Stop'){
console.log(name);
index++;
name = input[index];
}
}
names(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"]);