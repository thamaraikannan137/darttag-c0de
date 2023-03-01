# darttag-c0de
Problem:1
---------
Write a simple application using a recursive function that accepts a value (integer) and returns the fibonacci value at that position in the series.
The application should be performant at scale to handle larger numbers without slowing down exponentially.

Explanation
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
 
Explanation
----------
*The getBalancedSubstrings function takes a string S as input and returns an array of the longest balanced substrings of S. It works by iterating over all possible substring lengths and starting positions, checking if each substring is balanced using the isBalanced helper function, and adding it to the result array if it is. Finally, it filters the result array to only include the longest substrings.

*The isBalanced function takes a string str as input and returns true if it is balanced, and false otherwise. It works by counting the occurrences of each character in the string, and checking if there are exactly two different characters with the same count.

Problem:3
---------
You're given 3 plates (A, B, C) and an N number of rings labelled according to the diameter of each ring. For instance, Ring 5 has 5cm diameter and hence is larger than Ring 4 (4cm diameter) and Ring 3 (3cm diameter) etc.Write a function solution named "migrateRings(N, A, B, C)" that accepts a positive integer input; N denoting the number of Rings labelled from 1 to N as their respective diameter sizes. These provided Rings are sorted in ascending order on Plate A denoted by the input A. The task is to move all the rings from Plate A to Plate B using Plate C as help for auxillary holder. The function should return an array of the steps required to migrate N Rings from Plate A to Plate B.
At the end of the solution, all Rings should be sorted on Place B just as it was on Plate A.Examples:
1. Given N = 2, the function should return ["1: A to C", "2: A to B", "1: C to B"] which corresponds to the movements of each Ring on each Plate.
2. Given N = 3, the function should return ["1: A to B", "2: A to C", "1: B to C", "3: A to B", "1: C to A", "2: C to B", "1: A to B"]
3. Given N = 1, the function should return ["1: A to B"]Write an algorithm that assumes the following conditions:
 - Only one Ring can be moved at a time
 - A larger Ring cannot be placed on top of a smaller Ring. Example, Ring 4 can only be placed on Ring 5+ and not on any of Ring 3-
 - Ring diameter cannot be negative
 
Explanation
----------

*The function first checks if there is only one ring to move (n === 1). In that case, it simply moves the ring from the source to the destination and adds the corresponding step to the steps array.

*If there is more than one ring to move, the function recursively calls itself twice:

*First, it moves the top n-1 rings from the source to the auxiliary plate, using the destination plate as an auxiliary holder.
*Then, it moves the bottom ring (the largest one) from the source to the destination plate and adds the corresponding step to the steps array.
*Finally, it moves the n-1 rings from the auxiliary plate to the destination plate, using the source plate as an auxiliary holder.
*The solution function simply initializes an empty steps array and calls the migrateRings function with the provided arguments. It then returns the resulting steps array, which contains the steps required to move all the rings from Plate A to Plate B while keeping them sorted in ascending order.
