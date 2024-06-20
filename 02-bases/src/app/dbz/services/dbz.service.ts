import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

// interfaces
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' }) //  isto torna o comportamento da classe como service
export class DBZService {
  constructor() {}

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 8500,
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 1500,
    },
  ];

  // é um listener
  onNewCharcterFromElementoPai(character: Character): void {

  const newCharacter: Character = {
    id: uuid(),
   ...character
  }

    this.characters.push(character);
  }

  // listener for event delete
  onDeleteCharacter(index: number): void {
    console.log('onDeleteCharacter jota');

    this.characters.splice(index, 1);
  }

  onDeleteCharacterById(id: string): void {
    console.log('onDeleteCharacter jota');
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
