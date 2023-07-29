const numbers = [1, 2, 3, 4, 5];
const result = numbers.reduce(
  (acc, num) => {
    if (num % 2 === 0) {
      acc.evens.push(num);
    } else {
      acc.odds.push(num);
    }
    return acc;
  },
  { evens: [], odds: [] } // Initial value for the accumulator
);

console.log(result);

// OUTPUT - 

// { evens: [2, 4], odds: [1, 3, 5] }

// Explanation:

// The reduce() method is used to iterate over each element in the numbers array and accumulate them into an object with two properties: evens and odds.
// The reduce() method takes two arguments: a callback function and an initial value for the accumulator. 
// In this case, we set the initial value to { evens: [], odds: [] }, which is an object with two empty arrays.
// The callback function checks whether the current number is even or odd. 
// If it's even, it pushes the number to the evens array in the accumulator; otherwise, it pushes the number to the odds array.
// The result of the reduce() operation is the final value of the acc object, which holds the accumulated evens and odds arrays.
// The console.log(result) statement outputs the result object, which contains two properties: evens and odds, with the respective numbers grouped accordingly.
