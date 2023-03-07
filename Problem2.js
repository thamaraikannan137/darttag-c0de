//Problem 2

function getBalancedSubstrings(S) {
  if (S === String(S).toLowerCase()) {
    //check more than two character balanced
    if (method1(S)) {
      return `It is not balanced value `;
    } else {
      let result = [];
      // Iterate over all possible substring lengths
      for (let len = 2; len <= S.length; len++) {
        // Iterate over all possible starting positions for this length
        for (let i = 0; i <= S.length - len; i++) {
          // Check if this substring is balanced
          let substring = S.slice(i, i + len); //cabbacc
          //   console.log(`${i}===${substring}`)
          if (isBalanced(substring)) {
            // If it is, add it to the result array
            result.push(substring);
          }
        }
      }
       // Find the longest substrings in the result array

  let maxLength = result.reduce((max, str) => {
    return Math.max(max, str.length);
  }, 0);

  return result.filter((str) => str.length === maxLength);
    }
    
 
  } else {
    return `String in lowercase only allowed`;
  }
}

function method1(S) {
  let count = {};
  for (let i = 0; i < S.length; i++) {
    let ch = S[i];
    count[ch] = (count[ch] || 0) + 1;
    //console.log(count)
  }
  if (Object.keys(count).length > 2) {
    let arr = Object.values(count);
    let obj = {};
    arr.forEach((val) => {
      obj[val] = (obj[val] || 0) + 1;
    });
    let isAllow = false;
    Object.values(obj).forEach((val) => {
      if (val > 2) {
        isAllow = true;
      }
    });

    return isAllow;
  }
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
console.log(getBalancedSubstrings('aabbc'));
