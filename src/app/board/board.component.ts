import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html'
})
export class BoardComponent {
  @Input() firstTurn: boolean;
  
  board = new Array(9);
}
