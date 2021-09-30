import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html'
})
export class BoardComponent {
  @Input() firstTurn: boolean;

  @Output() select = new EventEmitter<void>();
  
  board = new Array<boolean | undefined>(9);

  selectTile(index: number) {
    if (this.board[index] !== undefined) {
      // Tile already hasa value
      return;
    }
    this.board[index] = this.firstTurn;
    this.select.emit();
  }
}
