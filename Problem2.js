//Problem 2

function getBalancedSubstrings(S) {
  let result = [];
  
  // Iterate over all possible substring lengths
  for (let len = 2; len <= S.length; len++) {
    // Iterate over all possible starting positions for this length
    for (let i = 0; i <= S.length - len; i++) {
      // Check if this substring is balanced
      let substring = S.slice(i, i + len);
      if (isBalanced(substring)) {
        // If it is, add it to the result array
        result.push(substring);
      }
    }
  }
  
  // Find the longest substrings in the result array
  let maxLength = result.reduce((max, str) => Math.max(max, str.length), 0);
  return result.filter(str => str.length === maxLength);
}

function isBalanced(str) {
  // Count the occurrences of each character in the string
  let count = {};
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    count[ch] = (count[ch] || 0) + 1;
    if (Object.keys(count).length > 2) {
      // If there are more than two characters, the string is not balanced
      return false;
    }
  }
  
  // Check if the counts of the two characters are the same
  let values = Object.values(count);
  return values.length === 2 && values[0] === values[1];
}
console.log(getBalancedSubstrings('cabbacc')) //["abba"]
