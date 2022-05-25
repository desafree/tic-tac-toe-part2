export default function ControlGame(player1, player2) {
  let round = 0;

  return { addRound, CurrentPlayerPlaying, checkWin };

  function addRound() {
    round += 1;
  }

  function CurrentPlayerPlaying() {
    if (round % 2) {
      return player1;
    } else {
      return player2;
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
      // console.log(array[i] !== "", array[i]);
    }

    return false;
  }
}
