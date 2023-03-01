# darttag-c0de
Problem:1
---------
Write a simple application using a recursive function that accepts a value (integer) and returns the fibonacci value at that position in the series.
The application should be performant at scale to handle larger numbers without slowing down exponentially.

solution
-----------
*To ensure that the function is performant at scale, we can use memoization to store the results of previous function calls and avoid redundant calculations. 

*This function uses an object called memo to store the results of previous function calls. If the result for a given input n is already in the memo object, it returns that value instead of recalculating it. This optimization significantly improves the performance of the function for large values of n.

problem:2
-------------
A string is balanced if it consists of exactly two different characters and both of those characters appear exactly the same number of times. For example: "aabbab" is balanced (both 'a' and 'b' occur three times) but "aabba" is not balanced ('a' occurs three times, 'b' occurs two times). String "aabbcc" is also not balanced (it contains three different letters).A substring of string S is a string that consists of consecutive letters in S. For example: "ompu" is a substring of "computer" but "cmptr" is not.Write a function solution called getBalancedSubstrings(List<String> S) that, given a string S, returns an array of the longest balanced substring of S.Examples:
1. Given S = "cabbacc", the function should return ["abba"] because it is the longest balanced substring.
2. Given S = "abababa", the function should return ["ababab", "bababa"] which are the longest balanced substrings.
3. Given S = "aaaaaaa", the function should return [] since S does not contain a balanced substring.Write an efficient algorithm for the following assumptions:
 - N is an integer within the range [1..100,000];
 - string S is made only of lowercase letters (a−z).
 
 solution
----------
*The getBalancedSubstrings function takes a string S as input and returns an array of the longest balanced substrings of S. It works by iterating over all possible substring lengths and starting positions, checking if each substring is balanced using the isBalanced helper function, and adding it to the result array if it is. Finally, it filters the result array to only include the longest substrings.

*The isBalanced function takes a string str as input and returns true if it is balanced, and false otherwise. It works by counting the occurrences of each character in the string, and checking if there are exactly two different characters with the same count.
