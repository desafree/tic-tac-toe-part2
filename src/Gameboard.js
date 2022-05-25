export default function CreateGameBoard() {
  let gameBoard = ["", "", "", "", "", "", "", "", ""];

  return { gameBoard, getArrayValue, addSymbol, resetGame };

  function addSymbol(symbol, position) {
    console.log(gameBoard);
    gameBoard[Number(position)] = String(symbol);
  }

  function getArrayValue() {
    return [...gameBoard];
  }

  function resetGame() {
    // console.log(gameBoard);
    gameBoard = ["", "", "", "", "", "", "", "", ""];
  }
}
