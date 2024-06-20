import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000,
    },
    {
      name: 'Goku',
      power: 8500,
    },
    {
      name: 'Gohan',
      power: 1500,
    },
   ];

   // é um listener
   onNewCharcterFromElementoPai(character: Character): void {
    console.log('main page');
    this.characters.push(character)
    console.log(character);
   }

   // listener for event delete
   onDeleteCharacter(index: number): void {
   console.log("onDeleteCharacter jota");

    this.characters.splice(index, 1);
   }

}
