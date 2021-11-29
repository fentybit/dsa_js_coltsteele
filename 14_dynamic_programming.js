//! Dynamic Programming

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
// Time complexity is O(2^n)