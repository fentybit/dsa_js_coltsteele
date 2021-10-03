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


