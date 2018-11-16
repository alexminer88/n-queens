/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function (n) {
  let board = new Board({ n });

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        board.togglePiece(i, j);
      }
    }
  }

  return board.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
  let board = new Board({ n });
  let placedPieces = 0;
  let counter = 0;

  let recursiveRooksCheck = function (rowIndex, occupiedCols = []) {
    if (placedPieces === n) {
      counter++;
      return;
    }

    if (rowIndex > n) {
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!occupiedCols.includes(i)) {
        board.togglePiece(rowIndex, i);
        placedPieces++;
        occupiedCols.push(i);

        recursiveRooksCheck(rowIndex + 1, occupiedCols);

        occupiedCols.pop();
        board.togglePiece(rowIndex, i);
        placedPieces--;
      }
    }
  };

  recursiveRooksCheck(0);

  return counter;
};

window.findNQueensSolution = function (n) {
  let result = this.findAllQueensSolutions(n);

  return result[0];
};

window.findAllQueensSolutions = function (n) {
  if (n === 2) {
    return [[0, 0], [0, 0]];
  }

  if (n === 3) {
    return [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  }

  let board = new Board({ n });
  let placedPieces = 0;
  let solutions = [];

  let recursiveQueenCheck = function (rowIndex, occupiedCols = []) {
    if (placedPieces === n) {
      let currentSolution = [];

      for (let i = 0; i < n; i++) {
        currentSolution.push(board.rows()[i].slice());
      }
      solutions.push(currentSolution);

      return;
    }

    if (rowIndex > n) {
      return;
    }

    for (let i = 0; i < n; i++) {
      let isNotOnDiag = function () {
        let x = 1;
        for (let k = occupiedCols.length - 1; k >= 0; k--) {
          if ((occupiedCols[k] === i - x) || (occupiedCols[k] === i + x)) {
            return false;
          }
          x++;
        }
        return true;
      };

      if (!occupiedCols.includes(i) && isNotOnDiag()) {
        board.togglePiece(rowIndex, i);
        placedPieces++;
        occupiedCols.push(i);

        recursiveQueenCheck(rowIndex + 1, occupiedCols);

        occupiedCols.pop();
        board.togglePiece(rowIndex, i);
        placedPieces--;
      }
    }
  };

  recursiveQueenCheck(0);

  return solutions;
};

window.countNQueensSolutions = function (n) {
  if (n === 2 || n === 3) {
    return 0;
  }

  return findAllQueensSolutions(n).length;
};