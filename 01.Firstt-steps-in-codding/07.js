function projects(input){
let name = input[0];
let projectsCount = Number(input[1]);

let totalTime = projectsCount * 3;

console.log(`The architect ${name} will need ${totalTime} hours to complete ${projectsCount} project/s."`);
}
projects(["George", "4"]);