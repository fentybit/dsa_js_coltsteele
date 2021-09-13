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

//! Sliding Window Pattern