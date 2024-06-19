import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  // get são como propriedades

  public name: string = "superman";
  public age: number = 45;

  cambiarName(): void {
    this.name = "sota Santos";
  }

  cambiarAge(): void {
    this.age = 29;
  }

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

}
