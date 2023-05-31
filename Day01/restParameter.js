// function nama(param1,param2,param3,param4) {

// }

function number(...numb) {
  console.log(numb);
  return numb + " ";
}
console.log(number(1, 2, 3, 4, 5, 6, 7));

//spread oprator
const numbers = ["a", "b", "c"];
const numbers1 = [6, 7, 8];

console.log(numbers.concat(numbers1));

const concat = [...numbers, ...numbers1, 12, 15, 19];

console.log(concat);