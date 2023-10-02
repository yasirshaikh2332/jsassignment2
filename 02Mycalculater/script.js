console.log('calculator');
let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;

    if (buttonText == "=") {
      screen.value = eval(screen.value);
    } else if (buttonText == "x") {
      screen.value += "*";
    } else if (buttonText == "c") {
      screen.value = "";
    } else {
      screen.value += buttonText;
    }
  })
}