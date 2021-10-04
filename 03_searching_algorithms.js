//! Searching Algorithms

//! Linear Search
// Write a function called linearSearch which accepts an array and a value, and returns the
// index at which the value exists. If the value does not exist in the array, return -1.
// Do not use indexOf to implement this function!

linearSearch([10, 15, 20, 25, 30], 15) // 1
linearSearch([100], 100) // 0
linearSearch([100], 200) // -1

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }

  return -1;
}

//! Binary Search 
// Write a function called binarySearch which accepts a sorted array and a value and returns 
// the index at which the value exists. Otherwise, return -1.
// This algorithm should be more efficient than linearSearch.

binarySearch([1, 2, 3, 4, 5], 2) // 1
binarySearch([1, 2, 3, 4, 5], 6) // -1
binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95) // 16
binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100) // -1

function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  let middle;

  while (left <= right) {
    middle = Math.floor((right + left) / 2);

    if (value === arr[middle]) {
      return middle;
    } else if (value < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}

