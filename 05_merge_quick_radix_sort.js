//! Merge Sort

// Merges two already sorted arrays
function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr[j]) {
      result.push(arr[i]);
      i++;
    } else {
      result.push(arr[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr[j]);
    j++;
  }

  return result;
}

// Recursive Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// Time Complexity O(n log n)
// O(log n) decompositions and O(n) comparisons per decomposition
// Space Complexity O(n)

// Given two sorted arrays, write a function called merge that accepts two sorted arrays
// and returns a new array with both of the values from each array sorted.
// This function should run in O(n + m) time and O(n + m) space and should not modify the 
// parameters passed to it.
// As before, the function should default to sorting numbers in ascending order. If you pass
// in a comparator function as a third argument, this comparator is what will be used. 
// Note that the input arrays will always be sorted according to the comparator. 
// Also, do not use the built in .sort method! We are going to use this helper to implement
// a sort, so the helper itself shouldn't depend on a sort.

let arr1 = [1, 3, 4, 5]
let arr2 = [2, 4, 6, 8]
merge(arr1, arr2) // [1, 2, 3, 4, 4, 5, 6, 8]
arr1 // [1, 3, 4, 5]
arr2 // [2, 4, 6, 8]

let arr3 = [-2, -1, 0, 4, 5, 6]
let arr4 = [-3, -2, -1, 2, 3, 5, 7, 8]
merge(arr3, arr4) // [-3, -2, -2, -1, -1, 0, 2, 3, 4, 5, 5, 6, 7, 8]

let arr5 = [3, 4, 5]
let arr6 = [1, 2]
merge(arr5, arr6) // [1, 2, 3, 4, 5]

let names = ['Bob', 'Ethel', 'Christine']
let otherNames = ['M', 'Colt', 'Allison', 'SuperLongNameOMG']

function stringLengthComparator(str1, str2) {
  return str1.length - str2.length;
}

merge(names, otherNames, stringLengthComparator)
// ['M', 'Bob', 'Colt', 'Ethel', 'Allison', 'Christine', 'SuperLongNameOMG']

function merge(arr1, arr2, comparator) {
  let i = 0;
  let j = 0;
  let result = [];

  if (typeof comparator !== 'function') {
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
  } else {
    while (i < arr1.length && j < arr2.length) {
      if (comparator(arr1[i], arr2[j]) >= 1) {
        result.push(arr2[j]);
        j++;
      } else {
        result.push(arr1[i]);
        i++;
      }
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

// Implement the merge sort algorithm. Given an array, this algorithm will sort the
// values in the array.

function mergeSort(arr, comparator) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid), comparator);
  let right = mergeSort(arr.slice(mid), comparator);

  if (typeof comparator !== 'function') {
    return merge(left, right);
  } else {
    return merge(left, right, comparator);
  }
}

//! Quick Sort

// pivot function with ES2015 syntax
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  let pivot = arr[start]; // assuming the pivot is always the first element
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, i, swapIndex);
    }
  }

  swap(arr, start, swapIndex);
  return swapIndex;
}

pivot([4, 8, 2, 1, 5, 7, 6, 3]) // 3

// recursive function
function quickSort(arr, left = 0, right = arr.length - 1) {
  while (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]) // [-3, 1, 2, 2, 3, 4, 5, 6, 9, 23, 100]

// The pivot function is responsible for taking an array, setting the pivot value, and 
// mutating the array so that all values less than the pivot wind up to the left of it,
// and all values greater than the pivot wind up the right of it.
// The pivot helper should accept not only an array and an optional comparator, but also
// an optional start and end index. These should default to 0 and the array length minus 1, 
// respectively. 

let arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3]
let arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16]
let arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"]

function strLength(a, b) {
  return a.length - b.length;
}

pivot(arr1) // 3
pivot(arr2) // 4
pivot(arr3, strLength) // 1

arr1.slice(0, 3).sort((a, b) => a - b) // [2, 3, 4]
arr1.slice(3).sort((a, b) => a - b) // [5, 7, 8, 9, 10, 20]

arr2.slice(0, 4).sort((a, b) => a - b) // [0, 2, 4, 5]
arr2.slice(4).sort((a, b) => a - b) // [8, 10, 11, 12, 13, 16]

arr3.slice(0, 1).sort(strLength) // ["Blue"]
arr3.slice(1).sort(strLength) // ["LilBub", "Grumpy", "Garfield", "Heathcliff"]

function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  let pivot = arr[start];
  let swapIndex = start;

  if (typeof comparator !== 'function') {
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIndex++;
        swap(arr, i, swapIndex);
      }
    }
  } else {
    for (let i = start + 1; i <= end; i++) {
      if (comparator(pivot, arr[i]) >= 1) {
        swapIndex++;
        swap(arr, i, swapIndex);
      }
    }
  }

  swap(arr, start, swapIndex);
  return swapIndex;
}

// quickSort function is responsible for taking an array, setting the pivot value, and
// mutating the array so that all values less than the pivot wind up to the left of it,
// and all values greater than the pivot wind up to the right of it. The default comparator
// should assume that the two parameters are numbers and that we are sorting the values 
// from smallest to largest.

function quickSort(arr, comparator, left = 0, right = arr.length - 1) {
  while (left < right) {
    let pivotIndex = pivot(arr, comparator, left, right);
    quickSort(arr, comparator, left, pivotIndex - 1);
    quickSort(arr, comparator, pivotIndex + 1, right);
  }
  return arr;
}
// RangeError: Maximum call stack size exceeded

// Best and Average Time Complexity O(n log n)
// O(log n) decompositions and O(n) comparisons per decomposition
// Worst Time Complexity O(n2)
// O(n) decompositions and O(n) comparisons per decomposition
// Solution to reduce time complexity can be solved by choosing a mid point in the array
// Space Complexity O(n)

//! Radix Sort

// Helper methods
function getDigit(num, index) {
  return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }

  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);

  for (let j = 0; j < maxDigitCount; j++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], j);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }

  return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852])

// Time Complexity O(nk)
// Space Complexity O(n + k)
// n is the length of the array, and k is the number of digits (average)