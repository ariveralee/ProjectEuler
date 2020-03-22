'use strict';

//Problem
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

//Solution
// We iterate up to 1,000 and if our index modulus of any of our multiples produces a remainder of 0, it's a multiple and we add that number to our sum. The answer should be:
//233168

//Time Complexity
// We iterate through n numbers in our max. so We have a time complexity of O(n). However, if we wanted to iterate through an array of multiples, this would make it a O(n^2) time complexity.

const max = 1000;
const multiples = [3,5]
var i;
var sum = 0;

for (i = 0; i < max; i++) {
  if (i % multiples[0] == 0 || i % multiples[1] == 0) {
    sum += i
  }
}
console.log("The sum is: " + sum)