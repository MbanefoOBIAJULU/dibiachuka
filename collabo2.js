/*function times(num1, num2) {
    return num1 * num2;
  }
  console.log(times(add(20, 45), subtract(80, 10))); // => 4550
  // 4550 == ((20 + 45) * (80 - 10))
  
  let sum = add(20, 45);
let difference = subtract(80, 10);
let result = times(sum, difference);
console.log(result);*/

function add(left, right) { // left & right are parameters here
  let sum = left + right;   // left & right are arguments here
  return sum;
}

let sum = add(3, 6); // 3 and 6 are arguments
console.log(add(3,6,5,7))
