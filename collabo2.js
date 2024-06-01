//Create a function that will output the first 100 prime numbers.*/

function generatePrimes(obinna) {
    primes = [];
    num = 2; // Starting from 2, the first prime number

    while (primes.length < obinna) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes;
}
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    if (n <= 3) {
        return true;
    }
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }
    i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}
console.log(generatePrimes(150)); // an array containing the first 100 prime numbers
