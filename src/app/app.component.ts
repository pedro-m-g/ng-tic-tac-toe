import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  firstTurn = Math.random() >= 0.5;

  get player() {
    return this.firstTurn ? 'X' : 'O';
  }

  get color() {
    return this.firstTurn ? 'text-green-500' : 'text-red-500';
  }

  onSelect() {
    this.firstTurn = !this.firstTurn;
  }

}
