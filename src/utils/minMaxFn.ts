import { Mark } from "./constants";
import { getWinner } from "./getWinner";
import { BoardType } from "./types";

// finding the ultimate play on the game that favors the computer
// const bestSpot = minimax(origBoard, aiPlayer);

// the main minimax function
export function minimax(newBoard: BoardType, player: Mark) {
  console.log("minimax");
  const availSpots = emptyIdx(newBoard);

  const isXWinner = getWinner(newBoard, Mark.X);
  const isOWinner = getWinner(newBoard, Mark.O);

  if (isXWinner) {
    return { score: -10 };
  } else if (isOWinner) {
    return { score: 10 };
  } else if (availSpots.length === 0) {
    return { score: 0 };
  }

  const moves = [];

  for (let i = 0; i < availSpots.length; i++) {
    //create an object for each and store the index of that spot that was stored as a number in the object's index key
    const move = {
      index: 0,
      score: 0,
    };

    move.index = availSpots[i];

    // set the empty spot to the current player
    newBoard[availSpots[i]] = player;

    //if collect the score resulted from calling minimax on the opponent of the current player
    if (player == Mark.X) {
      const result = minimax(newBoard, Mark.X);
      move.score = result.score;
    } else {
      const result = minimax(newBoard, Mark.O);
      move.score = result.score;
    }

    //reset the spot to empty
    newBoard[availSpots[i]] = newBoard[move.index];

    // push the object to the array
    moves.push(move);
  }

  // if it is the computer's turn loop over the moves and choose the move with the highest score
  let bestMove;
  if (player === Mark.X) {
    let bestScore = -10000;

    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    // else loop over the moves and choose the move with the lowest score
    let bestScore = 10000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  // return the chosen move (object) from the array to the higher depth
  return bestMove ? moves[bestMove] : moves[0];
}

// returns the available spots on the board
function emptyIdx(board: BoardType) {
  return board.filter((e) => e === null).map((_, i) => i);
}
