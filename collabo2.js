//Question 1
//Create a function that will be able to convert figures from Fahrenheit to Celsius.

function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}
console.log(fahrenheitToCelsius(32));   // FarToCel (0.0)
console.log(fahrenheitToCelsius(212));  //  FarToCel (100.0)
