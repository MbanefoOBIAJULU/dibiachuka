function times(num1, num2) {
    return num1 * num2;
  }
  console.log(times(add(20, 45), subtract(80, 10))); // => 4550
  // 4550 == ((20 + 45) * (80 - 10))
  
  let sum = add(20, 45);
let difference = subtract(80, 10);
let result = times(sum, difference);
console.log(result);
