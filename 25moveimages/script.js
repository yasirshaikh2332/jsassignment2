const movingImage = document.getElementById("movingImage");

// Initial position of the image
let xPos = 0;
let yPos = 0;

// Move the image based on arrow key presses
document.addEventListener("keydown", (event) => {
  const step = 10; // Adjust the step size as needed

  switch (event.key) {
    case "ArrowUp":
      yPos -= step;
      break;
    case "ArrowDown":
      yPos += step;
      break;
    case "ArrowLeft":
      xPos -= step;
      break;
    case "ArrowRight":
      xPos += step;
      break;
    default:
      return; // Do nothing if a different key is pressed
  }

  // Apply the new position to the image
  movingImage.style.transform = `translate(${xPos}px, ${yPos}px)`;
});
