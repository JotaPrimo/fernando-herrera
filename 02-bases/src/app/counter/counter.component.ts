import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <label for="number">
      Counter:
      <input type="number" id="number" value="{{ counter }}" />
    </label>

    &nbsp;
    <button (click)="increaseBy(5)">+1</button>
    &nbsp;
    <button (click)="decreaseBy(5)">-1</button>
    &nbsp;
    <button (click)="resetCounter()">Reset</button>
  `,
})
export class CounterComponent {
  constructor() {}

  public counter:number = 10;

  increaseBy(val: number): void {
    this.counter += val;
  }

  decreaseBy(val: number): void {
    this.counter -= val;
  }

  resetCounter(): void {
    this.counter = 0;
  }

}
