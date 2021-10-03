import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html'
})
export class TileComponent {
  /**
   * Player flag.
   */
  @Input() firstTurn: boolean;
  /**
   * Player who selected this tile.
   */
  @Input() value: boolean | undefined;

  /**
   * Select event.
   */
  @Output() select = new EventEmitter<void>();

  /**
   * Get player symbol from flag.
   */
  get player() {
    if (this.value === undefined) {
      return '';
    }
    return this.value ? 'X' : 'O';
  }

  /**
   * Get player color from flag.
   *
   * NOTE: Tailwind needs classes to be complete, otherwise these will be purgedfrom CSS.
   */
  get color() {
    if (this.value === undefined) {
      return 'bg-gray-600';
    }
    return this.value ? 'bg-green-600' : 'bg-red-600';
  }

  /**
   * Get hover styles.
   *
   * NOTE: Tailwind needs classes to be complete, otherwise these will be purgedfrom CSS.
   */
  get hover() {
    if (this.value === undefined) {
      return 'hover:bg-gray-400';
    }
    return this.value ? 'hover:bg-green-400' : 'hover:bg-red-400';
  }

  /**
   * Emit select event
   */
  selectTile() {
    this.select.emit();
  }

}
