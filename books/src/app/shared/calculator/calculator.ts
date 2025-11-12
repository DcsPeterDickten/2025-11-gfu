import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'calculator',
  imports: [FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  x: number = 0;
  y: number = 0;
  result: number = 0;

  add() {
    this.result = this.x + this.y;
  }

  subtract() {
    this.result = this.x - this.y;
  }

  clear() {
    this.result = 0;
    this.x = 0;
    this.y = 0;
  }
}
