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

//? https://www.bigocheatsheet.com/

//! Quick Sort

pivot([4, 8, 2, 1, 5, 7, 6, 3])

// pivot function with ES2015 syntax
function pivot(arr, start = 0, end = arr.length) {
  const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  let pivot = arr[start]; // assuming the pivot is always the first element
  let swapIndex = start;

  for (let i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, start, swapIndex);
  return swapIndex;
}

quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23])

// recursive function
function quickSort(arr, left = 0, right = arr.length) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

// Best and Average Time Complexity O(n log n)
// O(log n) decompositions and O(n) comparisons per decomposition
// Worst Time Complexity O(n2)
// O(n) decompositions and O(n) comparisons per decomposition
// Solution to reduce time complexity can be solved by choosing a mid point in the array

// Space Complexity O(n)