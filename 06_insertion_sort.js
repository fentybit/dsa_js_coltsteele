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