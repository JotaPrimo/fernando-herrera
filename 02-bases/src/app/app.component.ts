import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Meu Projeto Angular Espanhol';
  public counter: number = 10;


  increaseBy(val: number): void {
    if(val < 0) {
      alert(`Não pode ser menor que 0`)
    }
    this.counter += val;
  }

  decreaseBy(val: number): void {
    this.counter -= val;
  }

  resetCounter() {
    this.counter = 10;
  }

}
