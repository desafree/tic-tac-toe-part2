import CreateGameBoard from "./Gameboard.js";
import CreatePlayer from "./Player.js";
import ControlGame from "./ControlGame.js";
import updateDisplay from "./Display";

// const player1 = new CreatePlayer("Nico", "o");
// const player2 = new CreatePlayer("simo", "x");
// const gameController = ControlGame(player1.name, player2.name);
// gameController.addRound();
// console.log(gameController.CurrentPlayerPlaying());

// console.log({ player1, player2 });

// const gameBoard = CreateGameBoard();
// gameBoard.addSymbol("X", 5);
// gameBoard.consoleLog();

const player1 = new CreatePlayer("Nico", "o");
const player2 = new CreatePlayer("simo", "x");
const controller = ControlGame(player1.name, player2.name);
const gameBoard = CreateGameBoard();
updateDisplay(gameBoard.getArrayValue());

const cells = document.querySelectorAll(".rules p");
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    controller.addRound();
    console.log(controller.CurrentPlayerPlaying(), player1.name);
    if (controller.CurrentPlayerPlaying() == player1.name) {
      gameBoard.addSymbol(player1.symbol, index);
      console.log("player1");
    } else if (controller.CurrentPlayerPlaying() == player2.name) {
      gameBoard.addSymbol(player2.symbol, index);
      console.log("player2");
    }
    updateDisplay(gameBoard.getArrayValue());
    if (controller.checkWin(gameBoard.getArrayValue())) {
      gameBoard.resetGame();
      //   console.log(gameBoard);
      alert(`${controller.CurrentPlayerPlaying()} has won the game`);
      updateDisplay(gameBoard.getArrayValue());
    }
  });
});
