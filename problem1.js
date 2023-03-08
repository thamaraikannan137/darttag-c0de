//Find code explanation in reademe file

function fibonacci(n, memo = {}) {
  if (n == 0 || n == 1) {
    return n;
  }
  if (memo[n]) {
    return memo[n];
  }
  memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
  console.log(memo)
  return memo[n];
}

function position(n) {
  return fibonacci(n - 1);
}

console.log(position(11));
//0,1,1,2,3
