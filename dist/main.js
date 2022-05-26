/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ControlGame.js":
/*!****************************!*\
  !*** ./src/ControlGame.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ControlGame)
/* harmony export */ });
function ControlGame(player1, player2) {
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


/***/ }),

/***/ "./src/Display.js":
/*!************************!*\
  !*** ./src/Display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playAgainPopUp": () => (/* binding */ playAgainPopUp),
/* harmony export */   "updateDisplay": () => (/* binding */ updateDisplay),
/* harmony export */   "updatePoint": () => (/* binding */ updatePoint)
/* harmony export */ });


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


/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateGameBoard)
/* harmony export */ });
function CreateGameBoard() {
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


/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreatePlayer)
/* harmony export */ });
class CreatePlayer {
  constructor(name, symbol) {
    this.name = String(name);
    this.symbol = String(symbol);
    this.point = 0;
  }

  addPoint() {
    this.point += 1;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard.js */ "./src/Gameboard.js");
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player.js */ "./src/Player.js");
/* harmony import */ var _ControlGame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ControlGame.js */ "./src/ControlGame.js");
/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Display */ "./src/Display.js");





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
  const player1 = new _Player_js__WEBPACK_IMPORTED_MODULE_1__["default"](name1, symbol1);
  const player2 = new _Player_js__WEBPACK_IMPORTED_MODULE_1__["default"](name2, symbol2);
  const controller = (0,_ControlGame_js__WEBPACK_IMPORTED_MODULE_2__["default"])(player1.name, player2.name); //is passing player.name the correct implementation --> i don't ahve acces tpo the reference
  const gameBoard = (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_Display__WEBPACK_IMPORTED_MODULE_3__.updatePoint)([player1, player2]);
  (0,_Display__WEBPACK_IMPORTED_MODULE_3__.updateDisplay)(gameBoard.getArrayValue());

  const resetGameButton = document.querySelector(".restart");
  resetGameButton.addEventListener("click", () => {
    gameBoard.resetGame();
    controller.resetRounds();
    (0,_Display__WEBPACK_IMPORTED_MODULE_3__.updateDisplay)(gameBoard.getArrayValue());
  });

  const cells = document.querySelectorAll(".rules p");
  cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
      if (controller.CurrentPlayerPlaying() == player1.name) {
        gameBoard.addSymbol(player1.symbol, index);
      } else if (controller.CurrentPlayerPlaying() == player2.name) {
        gameBoard.addSymbol(player2.symbol, index);
      }
      (0,_Display__WEBPACK_IMPORTED_MODULE_3__.updateDisplay)(gameBoard.getArrayValue());
      if (controller.checkWin(gameBoard.getArrayValue())) {
        gameBoard.resetGame();
        (0,_Display__WEBPACK_IMPORTED_MODULE_3__.updateDisplay)(gameBoard.getArrayValue());
        if (controller.CurrentPlayerPlaying() == player1.name) {
          player1.addPoint();
          (0,_Display__WEBPACK_IMPORTED_MODULE_3__.playAgainPopUp)(player1.name);
        } else if (controller.CurrentPlayerPlaying() == player2.name) {
          player2.addPoint();
          (0,_Display__WEBPACK_IMPORTED_MODULE_3__.playAgainPopUp)(player2.name);
        }
        (0,_Display__WEBPACK_IMPORTED_MODULE_3__.updatePoint)([player1, player2]);
        controller.resetRounds();
      } else {
        controller.addRound();
      }
    });
  });
}

})();

/******/ })()
;