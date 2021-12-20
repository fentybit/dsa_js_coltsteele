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