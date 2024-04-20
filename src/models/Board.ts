export type Mark = "X" | "O" | null;

const WINNING_POSITIONS = [
  // Rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // Columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // Diagonals
  [0, 4, 8],
  [2, 4, 6],
];

class Board {
  cells: Mark[];

  constructor() {
    this.cells = Array(9).fill(null);
  }

  initialize() {
    this.cells = Array(9).fill(null);
    console.log(this.cells);
  }

  isEmptyCell(position: number): boolean {
    return this.cells[position] === null;
  }

  placeMark(position: number, mark: Mark): void {
    this.cells[position] = mark;
  }

  isBoardFull(): boolean {
    return this.cells.every((cell) => cell !== null);
  }

  isWinner(): Mark {
    WINNING_POSITIONS.map((positions) => {
      const [a, b, c] = positions;

      if (
        this.cells[a] !== null &&
        this.cells[a] === this.cells[b] &&
        this.cells[a] === this.cells[c]
      ) {
        return this.cells[a];
      }
    });
    return null;
  }
}

export default Board;
