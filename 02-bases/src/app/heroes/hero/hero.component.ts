import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = "superman";
  public age: number = 45;

  cambiarName(): void {
    this.name = "sota Santos";
  }

  cambiarAge(): void {
    this.age = 29;
  }

}
