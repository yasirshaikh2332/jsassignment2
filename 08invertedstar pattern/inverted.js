function printInvertedRightAngleTriangle(i) {
    for (let row = i; row >= 1; row--) {
      let pattern = '';
      for (let j = 1; j <= row; j++) {
        pattern += '*';
      }
      console.log(pattern);
    }
  }
  
  // Example usage with i = 6
  const i = 6;
  printInvertedRightAngleTriangle(i);
  