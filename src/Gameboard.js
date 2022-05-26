export default function CreateGameBoard() {
  let gameBoard = ["", "", "", "", "", "", "", "", ""];

  return { getArrayValue, addSymbol, resetGame };

  function addSymbol(symbol, position) {
    gameBoard[Number(position)] = String(symbol);
  }

  function getArrayValue() {
    return [...gameBoard];
  }

  function resetGame() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
  }
}
