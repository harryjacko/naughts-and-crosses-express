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

  makeMove(position: number) {
    if (!this.gameOver && !this.board.isEmptyCell(position)) {
      this.board.placeMark(position, this.currentPlayer);

      const winner = this.board.isWinner();
      if (winner) {
        this.gameOver = true;
        return; // winner?
      }

      if (this.board.isBoardFull()) {
        this.gameOver = true;
        return; // some other state?
      }

      this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    }

    // do nothing unsuccessful
    return false;
  }
}

export default Game;
