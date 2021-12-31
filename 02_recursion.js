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

// Non-recursive solution
function capitalizeFirst(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1))
  }
  return newArr;
}

// Recursive solution
function capitalizeFirst(arr) {
  if (arr.length === 1) return [arr[0][0].toUpperCase() + arr[0].slice(1)];

  let newArr = capitalizeFirst(arr.slice(0, -1));
  let string = arr.slice(arr.length - 1)[0][0].toUpperCase() + arr.slice(arr.length - 1)[0].substring(1);
  newArr.push(string);

  return newArr;
}

// Write a recursive function called nestedEvenSum. 
// Return the sum of all even numbers in an object which may contain nested objects.

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10

function nestedEvenSum(obj, total = 0) {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      total += nestedEvenSum(obj[key]);
    } else if (obj[key] % 2 === 0) {
      total += obj[key];
    }
  }

  return total;
}

// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.

let words = ['i', 'am', 'learning', 'recursion'];
capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

function capitalizeWords(arr) {
  if (arr.length === 1) return [arr[0].toUpperCase()];

  let recursion = capitalizeWords(arr.slice(0, -1));
  recursion.push(arr[arr.length - 1].toUpperCase());

  return recursion;
}

// Write a function called stringifyNumbers which takes in an object and finds all of the values
// which are numbers and converts them to strings. 

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}

stringifyNumbers(obj)
// {
//  num: "1",
//  test: [],
//  data: {
//    val: "4",
//    info: {
//      isRight: true,
//      random: "66"
//    }
//  }
// }

function stringifyNumbers(obj) {
  let newObj = {};

  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

// Write a function called collectStrings which accepts an object and returns an array of all 
// the values in the object that have a typeof string.

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}

collectStrings(obj) // ["foo", "bar", "baz"])

// Helper method recursion solution
function collectStrings(obj) {
  let arr = [];

  function gatherStrings(o) {
    for (let key in o) {
      if (typeof o[key] === 'string') {
        arr.push(o[key]);
      } else if (typeof o[key] === 'object') {
        return gatherStrings(o[key]);
      }
    }
  }

  gatherStrings(obj);
  return arr;
}

// Pure recursion solution
function collectStrings(obj) {
  let arr = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      arr.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      arr = arr.concat(collecStrings(obj[key]));
    }
  }

  return arr;
}

// Similar solution to pure recursion but adding 'arr' to argument as []
function collectStrings(obj, arr = []) {
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      arr.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      collectStrings(obj[key], arr)
    }
  }

  return arr;
}

// Trie Exercise
// This function should add the given word starting from the given index to the Trie.
// It will be recursive and notify the correct child of this Trie to add the word
// starting from a later index.
// Consider what the add function should do when it reaches the end of the word as a
// word does not necessarily end at a leaf. You must mark nodes which are the ends of 
// words so that the words can be reconstructed later.

let firstTrie = new Trie();
firstTrie.addWord('fun');
firstTrie.characters // {f: Trie}
!!firstTrie.characters['f'] // true

firstTrie.characters.f.characters.u // {u: Trie}
!!firstTrie.characters.f.characters.u // true

firstTrie.characters.f.characters.u.characters.n.isWord // true
!!firstTrie.characters.f.characters.u.characters.n // true
!!firstTrie.characters.f.characters.u.characters.n.characters // {}

!!firstTrie.characters.f.characters.u.characters.l // false

let secondTrie = new Trie();
secondTrie.addWord('ha');
secondTrie.addWord('hat');
secondTrie.addWord('has');
secondTrie.addWord('have');
secondTrie.addWord('hate');

secondTrie.characters.h.characters.a.isWord // true
secondTrie.characters.h.characters.a.characters.t.isWord // true
secondTrie.characters.h.characters.a.characters.v.isWord // false
secondTrie.characters.h.characters.a.characters.v.characters.e.isWord // true
secondTrie.characters.h.characters.a.characters.t.characters.e.isWord // true

Object.keys(secondTrie.characters.h.characters.a.characters).length // 3 ['t', 's', 'v']

class Trie {
  constructor() {
    this.characters = {};
    this.isWord = false;
  }

  addWord(word, index = 0) {
    let char = word[index];
    let subTrie = this.characters[char] || new Trie();

    if (index === word.length) {
      this.isWord = true;
    } else if (index < word.length) {
      subTrie.addWord(word, index + 1);
      this.characters[char] = subTrie;
    }

    return this;
  }
}

