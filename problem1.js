//Find code explanation in reademe file

function fibonacci(n, memo = {}) {
  if (n === 0 || n === 1) {
    return n;
  }

  if (memo[n]) {
    return memo[n];
  }

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);

  return memo[n];
}
console.log(fibonacci(10)) //55
