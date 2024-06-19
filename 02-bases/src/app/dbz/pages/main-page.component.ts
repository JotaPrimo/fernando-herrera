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
    {
      name: 'Raditz',
      power: 1345,
    },
    {
      name: 'Tien',
      power: 1890,
    },
   ];

   onNewCharcter(character: Character): void {
    console.log('main page');
    this.characters.push(character)
    console.log(character);
   }

}
