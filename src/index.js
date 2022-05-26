import CreateGameBoard from "./Gameboard.js";
import CreatePlayer from "./Player.js";
import ControlGame from "./ControlGame.js";
import { updateDisplay, updatePoint, playAgainPopUp } from "./Display";
import "../style.css";

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name1 = form.name1.value || "player1";
  let name2 = form.name2.value || "player2";
  let symbol1 = form.symbol1.value || "x";
  let symbol2 = form.symbol2.value || "o";
  form.reset();
  startGame({ name1, name2, symbol1, symbol2 });
  const popUp = document.querySelector(".starts-container");
  popUp.style.visibility = "hidden";
});

function startGame({
  name1 = "player1",
  symbol1 = "x",
  name2 = "player2",
  symbol2 = "o",
}) {
  const player1 = new CreatePlayer(name1, symbol1);
  const player2 = new CreatePlayer(name2, symbol2);
  const controller = ControlGame(player1.name, player2.name); //is passing player.name the correct implementation --> i don't ahve acces tpo the reference
  const gameBoard = CreateGameBoard();
  updatePoint([player1, player2]);
  updateDisplay(gameBoard.getArrayValue());

  const resetGameButton = document.querySelector(".restart");
  resetGameButton.addEventListener("click", () => {
    gameBoard.resetGame();
    controller.resetRounds();
    updateDisplay(gameBoard.getArrayValue());
  });

  const cells = document.querySelectorAll(".rules p");
  cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
      if (controller.CurrentPlayerPlaying() == player1.name) {
        gameBoard.addSymbol(player1.symbol, index);
      } else if (controller.CurrentPlayerPlaying() == player2.name) {
        gameBoard.addSymbol(player2.symbol, index);
      }
      updateDisplay(gameBoard.getArrayValue());
      if (controller.checkWin(gameBoard.getArrayValue())) {
        gameBoard.resetGame();
        updateDisplay(gameBoard.getArrayValue());
        if (controller.CurrentPlayerPlaying() == player1.name) {
          player1.addPoint();
          playAgainPopUp(player1.name);
        } else if (controller.CurrentPlayerPlaying() == player2.name) {
          player2.addPoint();
          playAgainPopUp(player2.name);
        }
        updatePoint([player1, player2]);
        controller.resetRounds();
      } else {
        controller.addRound();
      }
    });
  });
}
