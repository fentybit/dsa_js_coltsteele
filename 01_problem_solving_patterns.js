//! Frequency Counter

// Given two strings, write a function to determine if the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, 
// such as cinema, formed from iceman.

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

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the 
// same frequency of digits. Solution must be with O(n) time complexity.

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

// Implement a function called countUniqueValues, which accepts a sorted array, and counts the 
// unique values in the array. There can be negative numbers in the array, but it will always be sorted.

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

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
// and checks whether there are any duplicates among the arguments passed in. You can solve this 
// using the frequency counter pattern OR the multiple pointers pattern.

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true

// O(n) time and space complexity
// Solution with Frequency Counter pattern
function areThereDuplicates(...args) {
  let freqCount = {};

  for (let i in args) {
    freqCount[args[i]] = (freqCount[args[i]] || 0) + 1;
  }

  for (let key in freqCount) {
    if (freqCount[key] > 1) return true;
  }

  return false;
}

// Solution with Multiple Pointers pattern
function areThereDuplicates(...args) {
  args.sort((a, b) => a > b);

  let start = 0;
  let next = 1;

  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }

    start++;
    next++;
  }

  return false;
}

// One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

// Write a function called averagePair. Given a sorted array of integers and a target average, 
// determine if there is a pair of values in the array where the average of the pair equals 
// the target average. There maybe more than one pair that matches the average target.

// O(n) time complexity and O(1) space complexity

averagePair([1, 2, 3], 2.5) // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
averagePair([], 4) // false

function averagePair(arr, avg) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let value = (arr[start] + arr[end]) / 2;
    if (value === avg) {
      return true;
    } else if (value < avg) {
      start++;
    } else {
      end--;
    }
  }

  return false;
}

// Write a function called isSubsequence which takes in two strings and checks whether the characters
// in the first string form a subsequence of the characters in the second string. In other words, the 
// function should check whether the characters in the first string appear somewhere in the second 
// string, without their order changing.

isSubsequence('hello', 'hello world') // true
isSubsequence('sing', 'sting') // true
isSubsequence('abc', 'abracadabra') // true
isSubsequence('abc', 'acb') // false

// O(n + m) time complexity
// O(1) space complexity

// Iterative Solution
function isSubsequence(str1, str2) {
  let start = 0;
  let secondStart = 0;
  if (!str1) return true;

  while (secondStart < str2.length) {
    if (str1[start] === str2[secondStart]) start++;
    if (start === str1.length) return true;
    secondStart++;
  }

  return false;
}

// Recursive Solution but != O(1) space
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;

  if (str1[0] === str2[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}

//! Sliding Window

// Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
// The function should calculate the maximum sum of n consecutive elements in the array. 

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

// Write a function called minSubArrayLen which accepts two parameters - an array of positive
// integers and a positive integer.
// This function should return the minimal lengh of a contiguous subarray of which the sum is 
// greater than or equal to the integer passed to the function. If there isn't one, return 0 
// instead.

minSubArrayLen([2, 3, 1, 2, 4, 3], 7) // 2
minSubArrayLen([2, 1, 6, 5, 4], 9) // 2
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) // 1
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // 0

// O(n) time complexity and O(1) space complexity
function minSubArrayLen(arr, sum) {
  let start = 0;
  let end = 0;
  let total = 0
  let minLen = Infinity;

  while (start < arr.length) {
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

// Write a function called findLongestSubstring, which accepts a string and returns the length 
// of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6

// O(n2) time complexity
function findLongestSubstring(str) {
  if (str.length === 0) return 0;

  let left = 0;
  let right = 1;
  let newStr = str[left];
  let count = -Infinity;

  while (right < str.length) {
    if (newStr.includes(str[right])) {
      let i = newStr.indexOf(str[right]) + 1;
      newStr = newStr.slice(i);
    }
    newStr = newStr.concat(str[right]);
    right++;
    count = Math.max(count, newStr.length);
  }

  return count;
}

// O(n) time complexity
function findLongestSubstring(str) {
  let longest = 0;
  let lookup = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (lookup[char]) {
      start = Math.max(start, lookup[char]);
    }

    longest = Math.max(longest, i - start + 1);
    lookup[char] = i + 1;
  }

  return longest;
}

//! Divide and Conquer
// This pattern involves dividing a data set into smaller chunks and then repeating a process 
// with a subset of data. This pattern can tremendously decrease time complexity. 

// Given a sorted array of integers, write a function called search, that accepts a value and 
// returns the index where the value passed to the function is located. If the value is not 
// found, return -1.

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

// Given an array of 1s and 0s which has all 1st first followed by all 0s, write a function
// called countZeroes, which returns the number of zeroes in the array.

countZeroes([1, 1, 1, 1, 0, 0]) // 2
countZeroes([1, 0, 0, 0, 0]) // 4
countZeroes([0, 0, 0]) // 3
countZeroes([1, 1, 1, 1]) // 0

// Time Complexity O(log n)
function countZeroes(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let currentElement = arr[middle];

    if (currentElement === 1) {
      left = middle + 1;
    } else if (currentElement === 0) {
      right = middle - 1;
    }
  }

  return arr.length - left;
}

// Given a sorted array and a number, write a function called sortedFrequency that counts
// the occurrences of the number in the array.

sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2) // 4
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3) // 1
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1) // 2
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4) // -1

// Time Complexity O(log n)
function sortedFrequency(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let middleElement = arr[middle];

    if (middleElement < num) {
      left = middle + 1;
    } else if (middleElement > num) {
      right = middle - 1;
    } else if (middleElement === num && arr[left] < num) {
      left++;
    } else if (middleElement === num && arr[right] > num) {
      right--;
    } else {
      break;
    }
  }

  let count = right - left + 1;
  return count ? count : -1;
}

// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers
// and an integer. The function should return the index of the integer in the array.
// If the value is not found, return -1.

findRotatedIndex([3, 4, 1, 2], 4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
findRotatedIndex([37, 44, 66, 102, 10, 22], 14) // -1

// Time Complexity O(log n)
// Space Complexity O(1)

function findRotatedIndex(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  // find the pivot point
  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] > arr[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  // find the portion that holds the target value
  let pivot = left;
  left = 0;
  right = arr.length - 1;
  if (arr[pivot] <= num && num <= arr[right]) {
    left = pivot;
  } else {
    right = pivot;
  }

  // binary search
  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] > num) {
      right = mid - 1;
    } else if (arr[mid] < num) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}