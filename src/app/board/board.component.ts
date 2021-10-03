import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html'
})
export class BoardComponent {
  firstTurn = Math.random() >= 0.5;

  player(turn: boolean) {
    return turn ? 'X' : 'O';
  }

  color(turn: boolean) {
    return turn ? 'text-green-500' : 'text-red-500';
  }

  board = new Array<boolean | undefined>(9);

  selectTile(index: number) {
    if (this.board[index] !== undefined || this.winner !== undefined) {
      // Tile already has a value or the game has finished
      return;
    }
    this.board[index] = this.firstTurn;
    this.firstTurn = !this.firstTurn;
  }

  check(turn: boolean, indices: number[]): boolean {
    return indices.map(i => this.board[i])
                  .every(value => value === turn);
  }

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

  reset() {
    this.board = new Array<boolean | undefined>(9);
  }

}
