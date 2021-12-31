//! Dynamic Programming

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
// Time complexity is O(2^n)

function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}
// Time complexity is O(n)

function fib(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
// Time complexity is O(n) and better space complexity

// Write a function called coinChange which accepts two parameters: an array of
// denominations and a value. The function should return the number of ways you can
// obtain the value from the given collection of denominations. You can think of
// this as figuring out the number of ways to make change for a given value from a
// supply of coins.

const denominations = [1, 5, 10, 25]

coinChange(denominations, 1) // 1
coinChange(denominations, 2) // 1
coinChange(denominations, 5) // 2
coinChange(denominations, 10) // 4
coinChange(denominations, 25) // 13
coinChange(denominations, 45) // 39

function coinChange(denominations, value) {
  let counter = 0;

  while ()
}