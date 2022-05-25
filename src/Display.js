export default function updateDisplay(array) {
  const cells = document.querySelectorAll(".rules p");
  array.forEach((symbol, index) => {
    cells[index].textContent = symbol;
  });
}
