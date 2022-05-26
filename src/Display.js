export { updateDisplay, updatePoint, playAgainPopUp };

function updateDisplay(array) {
  const cells = document.querySelectorAll(".rules p");
  array.forEach((symbol, index) => {
    cells[index].textContent = symbol;
  });
}

function updatePoint([
  { name: name1, point: point1 },
  { name: name2, point: point2 },
]) {
  const names = document.querySelectorAll(".name");
  names[0].textContent = name1;
  names[1].textContent = name2;

  const points = document.querySelectorAll(".point");
  points[0].textContent = point1;
  points[1].textContent = point2;
}

function playAgainPopUp(name) {
  const popUp = document.querySelector(".play-again-container");
  const namePlayer = document.querySelector(".play-again-container span");
  namePlayer.textContent = name;

  popUp.style.visibility = "visible";

  const buttonPlayAgain = document.querySelector(
    ".play-again-container button"
  );
  buttonPlayAgain.addEventListener("click", () => {
    popUp.style.visibility = "hidden";
  });
}
