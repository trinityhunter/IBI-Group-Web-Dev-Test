const arr = [1, 2, 3, 4, 5];

const reversedArr = arr.reduce((accumulator, currentValue) => {
  
  accumulator.unshift(currentValue);
  return accumulator;
  
}, []);

console.log(reversedArr); 


// Output: [5, 4, 3, 2, 1]
