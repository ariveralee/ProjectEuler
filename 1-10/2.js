'use strict'

//Problem: Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

//Solution: Starting with the 2nd index, every 3rd index value is an even number. Knowing this, we can iterate every 3 indices to reduce the time it takes to figure out the sum.


//Time Complexity: The time complexity here is exponential (2^n) due to the nature of calculating fibonacci sequences. However, we can reduce the time complexity by storing the values of indices that were already calculated which could give us a time complexity of O(n)

function fib(num) {
  if (num <= 1) {
    return 1
  }
  return fib(num - 1) + fib(num - 2);
}
  // starting with the 2nd index of the fibonacci sequence, every 3rd index is an even number. so we do not need to iterate through every index.
function sumOfFib() {
  const max = 4000000;
  var sum = 0;
  var indexValue = 0;
  var i = 2;

  for (i; indexValue < max; i+=3) {
    sum += indexValue
    indexValue = fib(i)
  }

  console.log("The sum is: " + sum)
}

sumOfFib()