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



