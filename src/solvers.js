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
      board.togglePiece(i, j);
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(i, j);
      }
      // let numberOfPiecesPlaced = number of times toggled
      // if num === n, stop
    }
  }

  solution = board.rows();

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (n) {
  var solution = [];

  let board = new Board({ n });
  let rows = board.rows();
  let placedPieces = 0;
  // change start position if we didnt find any board to meet condition
  // we will have to mark how many we have placed to determine a solution

  // for (let k = 0; k < n; k++) {
  //   debugger;
  //   placedPieces = 0;
  //   board.togglePiece(0, k); //first piece placed, across top
  //   placedPieces++;
  //   for (let i = 0; i < rows.length; i++) {
  //     for (let j = 0; j < rows.length; j++) {
  //       // we don't want to toggle at (0, k)
  //       if (!(i === 0 && j === k)) {
  //         board.togglePiece(i, j);
  //         placedPieces++;
  //         if (board.hasAnyQueensConflicts()) {
  //           board.togglePiece(i, j);
  //           placedPieces--;
  //         }
  //         // let numberOfPiecesPlaced = number of times toggled
  //         // if num === n, stop
  //         if (placedPieces === n) {
  //           return board.rows();
  //         }

  //       }
  //     }
  //   }
  //   // board.togglePiece(0, k); // if we made it this far, the first piece placed didn't work
  //   placedPieces--;
  //   board = new Board({ n });
  //   rows = board.rows();
  // }

  let recursiveQueenCheck = function (board, row) {
    //     // base case
    //     // count number of pieces === n && no conflict, done
    //     if (placedPieces === n) {
    //       return board.rows();
    //     } else if (// we got a string returned) {
    //       // we want to get out when we can't place a piece on current row
    //       //return nothing

    //     } else {
    //       // recursive case

    //       // for every column index
    //       for (var j = 0; j < rows.length; j++)
    //   // togglePiece(row, columnIndex)
    //   togglePiece(row, columnIndex)
    //   // if board state passes, call recursiveQueenCheck(currentBoard, row +1)
    //   board.hasAnyQueensConflicts()

    //   //else untogglePiece
    //   togglePiece(row, columnIndex)
    //   // after every row,only if board state passes, call recursive function inputting current board state and next row recursiveQueenCheck(currentBoard, row +1)
    //   // return a string
    // }
    //     // recursive case
    //   }
    // // let board = new Board(n)
    // // call recursiveQueenCheck(board, 0)

    // solution = board.rows();

    // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
    // return solution;
  };

  // return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
  window.countNQueensSolutions = function (n) {
    var solutionCount = undefined; //fixme

    console.log('Number of solutions for ' + n + ' queens:', solutionCount);
    return solutionCount;
  }