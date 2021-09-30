import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html'
})
export class TileComponent {
  @Input() firstTurn: boolean;
  @Input() value: boolean | undefined;

  get player() {
    if (this.value === undefined) {
      return '';
    }
    return this.value ? 'X' : 'O';
  }
}
