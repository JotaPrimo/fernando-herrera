import { Injectable } from '@angular/core';

// interfaces
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' }) //  isto torna o comportamento da classe como service
export class DBZService {
  constructor() {}

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
    this.characters.push(character);
    console.log(character);
  }

  // listener for event delete
  onDeleteCharacter(index: number): void {
    console.log('onDeleteCharacter jota');

    this.characters.splice(index, 1);
  }
}
