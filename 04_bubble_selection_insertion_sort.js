//! Bubble Sort 

// unoptimized version of bubble sort 
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// unoptimized version of bubble sort with ES2015 swap version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }

  return arr;
}

// optimized with noSwap
function bubbleSort(arr) {
  let noSwap;
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  for (let i = arr.length; i > 0; i--) {
    noSwap = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }

    if (noSwap) break;
  }

  return arr;
}

// Implement a function called bubbleSort. Given an array, bubbleSort will sort the 
// values in the array. The function takes 2 parameters: an array and an optional 
// comparator function.
// The comparator function is a callback that will take two values from the array 
// to be compared. The function returns a negative value if the first value is less
// than the second, a positive value if the first value is greater than the second,
// and 0 if both values are equal. The default comparator you provide should assume
// that the two parameters are numbers and that we are sorting the values from 
// smallest to largest.

bubbleSort([4, 20, 12, 10, 7, 9]) // [4, 7, 9, 10, 12, 20]
bubbleSort([0, -10, 7, 4]) // [-10, 0, 4, 7]
bubbleSort([1, 2, 3]) // [1, 2, 3]
bubbleSort([])

let kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy']
function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}
bubbleSort(kitties, strComp) // ['Blue', 'Garfield', 'Grumpy', 'Heathcliff', LilBub']

let moarKittyDate = [{
  name: 'LilBub',
  age: 7
}, {
  name: 'Garfield',
  age: 40
}, {
  name: 'Heathcliff',
  age: 45
}, {
  name: 'Blue',
  age: 1
}, {
  name: 'Grumpy',
  age: 6
}]
function oldestToYoungest(a, b) {
  return b.age - a.age;
}

function bubbleSort(arr, comparator) {
  let noSwap;
  const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

  if (typeof comparator !== 'function') {
    for (let i = arr.length; i > 0; i--) {
      noSwap = true;

      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
          noSwap = false;
        }
      }

      if (noSwap) break;
    }
  } else {
    for (let i = arr.length; i > 0; i--) {
      noSwap = true;

      for (let j = 0; j < i - 1; j++) {
        if (comparator(arr[j], arr[j + 1]) >= 1) {
          swap(arr, j, j + 1);
          noSwap = false;
        }
      }

      if (noSwap) break;
    }
  }

  return arr;
}

//! Selection Sort

function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }

    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

//! Insertion Sort

function insertionSort(arr) {
  let value;
  for (let i = 1; i < arr.length; i++) {
    value = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > value; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = value;
  }

  return arr;
}

// Bubble and Insertion Sort time complexity at best can be O(n).
// Otherwise, time complexity would be O(n2).
// Space complexity is O(1).