import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html'
})
export class TileComponent {
  @Input() firstTurn: boolean;
  @Input() value: boolean | undefined;

  @Output() select = new EventEmitter<void>();

  get player() {
    if (this.value === undefined) {
      return '';
    }
    return this.value ? 'X' : 'O';
  }

  selectTile() {
    this.select.emit();
  }

}
