import Board, { Mark } from "./Board";

class Game {
  board: Board;
  currentPlayer: Mark;
  gameOver: boolean;

  constructor() {
    this.board = new Board();
    this.currentPlayer = "X";
    this.gameOver = false;
  }

  startNewGame() {
    this.board.initialize();
    this.currentPlayer = "X";
  }

  makeMove() {
    // TODO:
    //
  }
}

export default Game;
