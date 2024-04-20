import Board, { Mark } from "./Board";

class Game {
  board: Board;
  currentPlayer: Mark;
  gameOver: boolean;
  winner: Mark;

  constructor() {
    this.board = new Board();
    this.currentPlayer = "X";
    this.gameOver = false;
    this.winner = null;
  }

  startNewGame() {
    this.board.initialize();
    this.currentPlayer = "X";
  }

  makeMove(position: number) {
    if (!this.gameOver && this.board.isEmptyCell(position)) {
      this.board.placeMark(position, this.currentPlayer);

      const winner = this.board.isWinner();
      if (winner) {
        this.gameOver = true;
        this.winner = winner;
        return;
      }

      if (this.board.isBoardFull()) {
        this.gameOver = true;
        return;
      }

      this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    }

    // do nothing unsuccessful
    return;
  }
}

export default Game;
