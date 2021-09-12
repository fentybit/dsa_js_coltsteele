//! Frequency Counter

// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true

// Note: You may assume the string contains only lowercase alphabets.
// Time Complexity O(n)

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
