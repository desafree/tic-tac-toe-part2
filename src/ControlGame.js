export default function ControlGame(player1, player2) {
  let round = 0;

  return { addRound, CurrentPlayerPlaying, checkWin, resetRounds };

  function addRound() {
    round += 1;
    console.log(round);
  }

  function CurrentPlayerPlaying() {
    if (round % 2) {
      return player2;
    } else {
      return player1;
    }
  }

  function checkWin(array) {
    for (let i = 0; i < 9; i++) {
      if (
        (array[i] != "" &&
          array[i] == array[i + 3] &&
          array[i + 3] == array[i + 6]) ||
        (array[i] != "" &&
          array[i] == array[i + 1] &&
          array[i + 1] == array[i + 2]) ||
        (array[i] != "" &&
          array[i] == array[i + 2] &&
          array[i + 2] == array[i + 4]) ||
        (array[i] != "" &&
          array[i] == array[i + 4] &&
          array[i + 4] == array[i + 8])
      ) {
        console.log(`congratulation ${CurrentPlayerPlaying()}`);
        return true;
      }
    }

    return false;
  }

  function resetRounds() {
    round = 0;
    console.log(round);
  }
}
