/*
Filename: ComplexCode.js
Content: A complex and elaborate code demonstrating advanced features and techniques in JavaScript.
*/

// Example function: Palindrome Checker
function isPalindrome(word) {
  const lowerCaseWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedWord = lowerCaseWord.split('').reverse().join('');
  return lowerCaseWord === reversedWord;
}

// Example class: Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Example array of persons
const persons = [
  new Person('John Doe', 30),
  new Person('Jane Smith', 25),
  new Person('Mike Johnson', 35)
];

// Example asynchronous function: Fetch JSON data
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Example higher-order function: Map and filter persons
function filterAndMapPersons(persons, minAge) {
  return persons
    .filter(person => person.age >= minAge)
    .map(person => {
      const { name, age } = person;
      return { name, age, isAdult: age >= 18 };
    });
}

// Example generator function: Infinite Fibonacci sequence
function* fibonacciSequence() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Example event listeners: Click and keypress
document.addEventListener('click', () => {
  console.log('Click event triggered!');
});

document.addEventListener('keypress', (event) => {
  console.log(`Key "${event.key}" pressed.`);
});

// Complex code continues...

// (200+ lines of advanced and complex JavaScript code)
// ...
// ...

// Main function to execute the complex code
function main() {
  // Example usage of the features and components defined above
  const palindromeCheckResult = isPalindrome('A man, a plan, a canal, Panama!');
  console.log('Palindrome Check Result:', palindromeCheckResult);

  persons.forEach(person => person.greet());

  fetchData('https://api.example.com/data')
    .then(data => console.log('Fetched Data:', data))
    .catch(error => console.error('Error fetching data:', error));

  const filteredAndMappedPersons = filterAndMapPersons(persons, 30);
  console.log('Filtered and Mapped Persons:', filteredAndMappedPersons);

  const fibonacciGen = fibonacciSequence();
  for (let i = 0; i < 10; i++) {
    console.log(fibonacciGen.next().value);
  }
}

// Execute the main function
main();