# darttag-c0de
Problem:1
---------
*To ensure that the function is performant at scale, we can use memoization to store the results of previous function calls and avoid redundant calculations. 
*This function uses an object called memo to store the results of previous function calls. If the result for a given input n is already in the memo object, it returns that value instead of recalculating it. This optimization significantly improves the performance of the function for large values of n.
