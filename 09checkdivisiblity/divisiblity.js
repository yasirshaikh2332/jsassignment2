function printNumbersDivisibleBy3NotBy2(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      const currentNumber = numbers[i];
      
      // Check if the number is divisible by 2
      if (currentNumber % 2 === 0) {
        continue; // Skip this number and continue to the next iteration
      }
      
      // Check if the number is divisible by 3
      if (currentNumber % 3 === 0) {
        console.log(currentNumber);
      }
    }
  }
  
  // Example usage with an array of numbers
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  printNumbersDivisibleBy3NotBy2(numbers);
  