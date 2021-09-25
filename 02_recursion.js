//! Recursion

// Write a function called power which accepts a base and an exponent. The function should return the
// power of the base to the exponent. This function should mimic the functionality of Math.pow().
// Do not worry about negative bases and exponents.

power(2, 0) // 1
power(2, 2) // 4
power(2, 4) // 16

function power(base, exp) {
  if (exp === 0) return 1;

  if (exp > 0) return base * power(base, exp - 1);
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

  if (num > 0) return num * factorial(num - 1);
}

// Write a function called productOfArray which takes in an array of numbers and returns the product
// of them all.

productOfArray([1, 2, 3]) // 6
productOfArray([1, 2, 3, 10]) // 60

function productOfArray(arr) {
  if (arr.length === 1) return arr[0];

  if (arr.length > 0) return arr[0] * productOfArray(arr.slice(1));
}

// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 
// to the number passed to the function.

recursiveRange(6) // 21
recursiveRange(10) // 55

function recursiveRange(num) {

}