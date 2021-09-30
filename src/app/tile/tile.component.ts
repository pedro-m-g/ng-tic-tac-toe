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

  get color() {
    if (this.value === undefined) {
      return 'bg-gray-600';
    }
    return this.value ? 'bg-green-600' : 'bg-red-600';
  }

  get hover() {
    if (this.value === undefined) {
      return 'hover:bg-gray-400';
    }
    return this.value ? 'hover:bg-green-400' : 'hover:bg-red-400';
  }

  selectTile() {
    this.select.emit();
  }

}
