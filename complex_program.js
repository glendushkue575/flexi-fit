/*
   Filename: complex_program.js
   Description: A complex program demonstrating various advanced concepts in JavaScript.
*/

// Utility function to generate a random number within a given range
function getRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Class definition for a complex number
class ComplexNumber {
   constructor(real, imaginary) {
      this.realPart = real;
      this.imaginaryPart = imaginary;
   }

   add(otherComplex) {
      let resultReal = this.realPart + otherComplex.realPart;
      let resultImaginary = this.imaginaryPart + otherComplex.imaginaryPart;
      return new ComplexNumber(resultReal, resultImaginary);
   }

   subtract(otherComplex) {
      let resultReal = this.realPart - otherComplex.realPart;
      let resultImaginary = this.imaginaryPart - otherComplex.imaginaryPart;
      return new ComplexNumber(resultReal, resultImaginary);
   }

   multiply(otherComplex) {
      let resultReal = this.realPart * otherComplex.realPart - this.imaginaryPart * otherComplex.imaginaryPart;
      let resultImaginary = this.realPart * otherComplex.imaginaryPart + this.imaginaryPart * otherComplex.realPart;
      return new ComplexNumber(resultReal, resultImaginary);
   }

   toString() {
      return this.realPart + " + " + this.imaginaryPart + "i";
   }
}

// Function to calculate the factorial of a number
function factorial(n) {
   if (n <= 1) {
      return 1;
   }
   return n * factorial(n - 1);
}

// Generate an array of random numbers
let randomNumbers = [];
for (let i = 0; i < 100; i++) {
   randomNumbers.push(getRandomNumber(1, 100));
}

// Find the maximum and minimum numbers in the array
let maxNumber = Math.max(...randomNumbers);
let minNumber = Math.min(...randomNumbers);

// Calculate the sum and average of the array elements
let sum = randomNumbers.reduce((acc, curr) => acc + curr, 0);
let average = sum / randomNumbers.length;

// Sort the array in ascending order
randomNumbers.sort((a, b) => a - b);

// Generate a Fibonacci sequence up to a given limit
function generateFibonacciSequence(limit) {
   let fibonacci = [0, 1];
   let i = 1;
   while (fibonacci[i] + fibonacci[i - 1] <= limit) {
      fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
      i++;
   }
   return fibonacci;
}

// Calculate the sum of even numbers in the Fibonacci sequence
let fibonacciSequence = generateFibonacciSequence(1000);
let evenSum = fibonacciSequence.reduce((acc, curr) => (curr % 2 === 0 ? acc + curr : acc), 0);

// Perform a complex arithmetic operation
let complexNumber1 = new ComplexNumber(2, 3);
let complexNumber2 = new ComplexNumber(4, 5);
let complexResult = complexNumber1.multiply(complexNumber2);

console.log("Max number: " + maxNumber);
console.log("Min number: " + minNumber);
console.log("Sum: " + sum);
console.log("Average: " + average);
console.log("Sorted Array: " + randomNumbers);
console.log("Fibonacci Sequence: " + fibonacciSequence);
console.log("Sum of Even Fibonacci Numbers: " + evenSum);
console.log("Complex Result: " + complexResult);