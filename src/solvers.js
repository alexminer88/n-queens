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
  let solution = [];
  let board = new Board({ n });
  let rows = board.rows();

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows.length; j++) {
      if (i === j) {
        board.togglePiece(i, j);
      }
    }
  }

  solution = board.rows();

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
  let board = new Board({ n });
  let placedPieces = 0;
  let solutions = [];

  let recursiveRooksCheck = function (rowIndex, occupiedCols = []) {
    if (placedPieces === n) {
      let currentSolution = [];
      for (let i = 0; i < n; i++) {
        currentSolution.push(board.rows()[i].slice());
      }
      solutions.push(currentSolution);
      return;
    }

    if (rowIndex > board.rows().length) {
      return;
    }

    for (let i = 0; i < board.rows().length; i++) {
      if (!occupiedCols.includes(i)) {
        board.togglePiece(rowIndex, i);
        placedPieces++;
        if (board.hasAnyRooksConflicts()) {
          board.togglePiece(rowIndex, i);
          placedPieces--;
        } else {
          occupiedCols.push(i);
          recursiveRooksCheck(rowIndex + 1, occupiedCols);
          occupiedCols.pop();
          board.togglePiece(rowIndex, i);
          placedPieces--;
        }
      }
    }
  };

  recursiveRooksCheck(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutions.length);

  return solutions.length;
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

    if (rowIndex > board.rows().length) {
      return;
    }

    for (let i = 0; i < board.rows().length; i++) {
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
        if (board.hasAnyQueensConflicts()) {
          board.togglePiece(rowIndex, i);
          placedPieces--;
        } else {
          occupiedCols.push(i);
          recursiveQueenCheck(rowIndex + 1, occupiedCols);
          occupiedCols.pop();
          board.togglePiece(rowIndex, i);
          placedPieces--;
        }
      }
    }
  };

  recursiveQueenCheck(0);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solutions[0]));

  return solutions;
};

window.countNQueensSolutions = function (n) {
  let solutionCount = findAllQueensSolutions(n).length;

  if (n === 2 || n === 3) {
    return 0;
  }

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);

  return solutionCount;
};