//! Recursion

// Write a function called power which accepts a base and an exponent. The function should return the
// power of the base to the exponent. This function should mimic the functionality of Math.pow().
// Do not worry about negative bases and exponents.

power(2, 0) // 1
power(2, 2) // 4
power(2, 4) // 16

function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

// Write a function factorial which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it; e.g., factorial four (4!) 
// is equal to 24, because 4 * 3 * 2 * 1 equals 24. factorial zero (0!) is always 1.

factorial(1) // 1
factorial(2) // 2
factorial(4) // 24
factorial(7) // 5040

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

// Write a function called productOfArray which takes in an array of numbers and returns the product
// of them all.

productOfArray([1, 2, 3]) // 6
productOfArray([1, 2, 3, 10]) // 60

function productOfArray(arr) {
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
}

// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 
// to the number passed to the function.

recursiveRange(6) // 21
recursiveRange(10) // 55

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

// Write a recursive function called fib which accepts a number and returns the nth number in 
// the Fibonacci sequence. Recall that Fibonacci sequence is the sequence of the whole numbers
// 1, 1, 2, 3, 5, 8, ...which starts with 1 and 1, and where every number thereafter is equal
// to the sum of the previous two numbers.

fib(4) // 3
fib(10) // 55
fib(28) // 317811
fib(35) // 9227465

function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

reverse('awesome') // 'emosewa'
reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
  if (str.length === 1) return str;
  return reverse(str.slice(1)) + str[0];
}

// Write a recursive function called isPalindrome which returns true if the string passed to it is a
// palindrome (reads the same forward and backward). Otherwise it returns false.

isPalindrome('awesome') // false
isPalindrome('foobar') // false
isPalindrome('tacocat') // true
isPalindrome('amanaplanacanalpanama') // true
isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  if (str.length === 0) return true;
  if (str[0] === str[str.length - 1]) return isPalindrome(str.slice(1, str.length - 1));

  return false;
}

// Write a recursive function called someRecursive which accepts an array and a callback. The function 
// returns true if a single value in the array returns true when passed to the callback. Otherwise,
// it returns false.

someRecursive([1, 2, 3, 4], isOdd) // true
someRecursive([4, 6, 8, 9], isOdd) // true
someRecursive([4, 6, 8], isOdd) // false
someRecursive([4, 6, 8], val => val > 10); // false

function someRecursive(arr, callback) {
  if (arr.length === 0) return false;
  if (callback(arr[0])) return true;
  return someRecursive(arr.slice(1), callback);
}

// Write a recursive function called flatten which accepts an array of arrays and returns a new array
// with all values flattened.

flatten([1, 2, 3, [4, 5]]) // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
flatten([[1], [2], [3]]) // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

function flatten(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.

capitalizeFirst(['car', 'taco', 'banana']); // ['Car','Taco','Banana']

function capitalizeFirst(arr) {

}