//! Frequency Counter

// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true

// Time Complexity O(n)

// Note: 
// You may assume the string contains only lowercase alphabets

function validAnagram(word1, word2) {
  if (word1.length !== word2.length) return false;

  const freqCounter1 = {};
  const freqCounter2 = {};

  for (let char of word1) {
    freqCounter1[char] = ++freqCounter1[char] || 1;
  }

  for (let char of word2) {
    freqCounter2[char] = ++freqCounter2[char] || 1;
  }

  for (let char in freqCounter1) {
    if (freqCounter1[char] !== freqCounter2[char]) return false;
  }

  return true;
}

// Alternative Solution
function validAnagram(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }

    return true;
  }
}

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. Solution must be with O(n) time complexity.

sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false

function sameFrequency(number1, number2) {
  let num1 = number1.toString();
  let num2 = number2.toString();

  if (num1.length !== num2.length) return false;

  let lookup = {};

  for (let num of num1) {
    lookup[num] ? lookup[num] += 1 : lookup[num] = 1;
  }

  for (let num of num2) {
    if (lookup[num]) {
      lookup[num] -= 1;
    } else {
      return false;
    }
  }

  return true;
}

//! Multiple Pointers

// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-1, -1, -1, 0, 1]) // 4

// Time Complexity O(n)
// Space Complexity O(n)

// Bonus: 
// You must do this with constant or O(1) space and O(n) time

// Solution with both O(n) time and space complexity
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let value;
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    value = arr[i];

    if (!newArr.includes(value)) {
      newArr.push(value);
    }
  }

  return newArr.length;
}

// Solution with O(1) space and O(n) time
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true


//! Sliding Window

// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array. 

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17
maxSubarraySum([4, 2, 1, 6], 1) // 6
maxSubarraySum([4, 2, 1, 6, 2], 4) // 13
maxSubarraySum([], 4) // null

// Naive solution with O(n2) time complexity
function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;

  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    return max;
  }
}

// Sliding Window solution with O(n) time complexity
function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

//! Divide and Conquer
// This pattern involves dividing a data set into smaller chunks and then repeating a provess with a subset of data. This pattern can tremendously decrease time complexity. 

// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.

search([1, 2, 3, 4, 5, 6], 4) // 3
search([1, 2, 3, 4, 5, 6], 6) // 5
search([1, 2, 3, 4, 5, 6], 11) // -1

// Solution with log n Time Complexity (Binary Search)
function search(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }

    return -1;
  }
}