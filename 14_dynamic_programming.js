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