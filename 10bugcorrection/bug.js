function correctCartBug(cart) {
    // Iterate through the cart array
    for (let i = 0; i < cart.length; i++) {
      // Double the quantity of each item
      cart[i] *= 2;
    }
    // Return the corrected cart array
    return cart;
  }
  
  // Example usage with a cart array
  const cart = [2, 4, 1, 5];
  const correctedCart = correctCartBug(cart);
  console.log(correctedCart); // Output: [4, 8, 2, 10]
  