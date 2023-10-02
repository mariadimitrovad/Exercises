function book(input){
let index = 0;
let searchedBook = input[index];
index++;
let currentBook = input[index];
index++;

let checkedBooks = 0;

let isFound = false;

while(currentBook !== 'No more books'){

  if(currentBook === searchedBook){
    isFound = true;
    break;
  }

  checkedBooks++;
  currentBook = input[index];
  index++;
}

if(isFound){
  console.log(`You checked ${checkedBooks} books and fount it.`);
} else {
  console.log('The book you search is not here!');
  console.log(`You checked ${checkedBooks} books.`);
}
}
book(["Troy",
"Stronger",
"Life Style",
"Troy"]);