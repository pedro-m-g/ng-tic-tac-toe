import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html'
})
export class BoardComponent {

  /**
   * Flag to determine wether current turn is "X" (true) or "O" (false) player.
   */
  firstTurn = Math.random() >= 0.5;

  /**
   * Game board, represented as a plain array of booleans (true = "X", false = "O").
   */
  board = new Array<boolean | undefined>(9);

  /**
   * Get player symbol ("X" or "O") from flag.
   *
   * @param turn Player flag
   *
   * @returns Player symbol
   */
  player(turn: boolean) {
    return turn ? 'X' : 'O';
  }

  /**
   * Get player color from flag.
   *
   * NOTE: Classes must be purgable by Tailwind, that means these must be complete,
   *       otherwise, these will be removed from the processed CSS.
   *
   * @param turn Player flag
   *
   * @returns Player color
   */
  color(turn: boolean) {
    return turn ? 'text-green-500' : 'text-red-500';
  }

  /**
   * Select a tile.
   *
   * @param index Selected index
   *
   * @returns void
   */
  selectTile(index: number) {
    if (this.board[index] !== undefined || this.winner !== undefined) {
      // Tile already has a value or the game has finished
      return;
    }
    this.board[index] = this.firstTurn; // Select tile with current player.
    this.firstTurn = !this.firstTurn; // Toggle current player.
  }

  /**
   * Check if {turn} player has won in the {indices} row.
   *
   * @param turn Player flag
   * @param indices Board indices to check for a win
   *
   * @returns true if this is a winner board
   */
  check(turn: boolean, indices: number[]): boolean {
    return indices.map(i => this.board[i])
                  .every(value => value === turn);
  }

  /**
   * Checks if the {turn} player has won.
   *
   * @param turn Player flag
   *
   * @returns true if player has won
   */
  checkTurn(turn: boolean) {
    return (
      // Check rows
      this.check(turn, [0, 1, 2]) ||
      this.check(turn, [3, 4, 5]) ||
      this.check(turn, [6, 7, 8]) ||
      // Check cols
      this.check(turn, [0, 3, 6]) ||
      this.check(turn, [1, 4, 7]) ||
      this.check(turn, [2, 5, 8]) ||
      // Check diagonals
      this.check(turn, [0, 4, 8]) ||
      this.check(turn, [2, 4, 6])
    );
  }

  /**
   * Get winner
   *
   * true: first player (X)
   * false: second player (O)
   * undefined: game not finished
   *
   * Emits finish event if winner is not undefined;
   */
  get winner() {
    if (this.checkTurn(true)) {
      return true;
    }
    if (this.checkTurn(false)) {
      return false;
    }
    return undefined;
  }

  /**
   * Start a new game
   */
  reset() {
    this.board = new Array<boolean | undefined>(9);
  }

}
