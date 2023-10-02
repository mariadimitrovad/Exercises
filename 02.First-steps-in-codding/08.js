function basketball(input){
let taxYear = Number(input[0]);
let basketballShoes = 0.60 * taxYear;
let basketballSuit = 0.80 * basketballShoes;
let basketball = ( 1 / 4 ) * basketballSuit;
let basketballAcs = ( 1 / 5 ) * basketball;

let totalPrice = taxYear + basketballShoes + basketballSuit + basketball + basketballAcs;

console.log(totalPrice); 
}
basketball(['365']);