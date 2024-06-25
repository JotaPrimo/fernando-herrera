import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-add-character',
    templateUrl: './add-character.component.html',
    styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  // emissor de filho para pai
  @Output() // conecta com a propriedade que quero ouvir no elemtento pai
  onNewCharacterFromElementoFilho: EventEmitter<Character> = new EventEmitter();

  // valor emitido
  public character: Character = {
    name: '',
    power: 0
  }


  // funcao que emite
  emitCharacterFromElementoFilho(): void {
    console.log(this.character);

    if(this.character.name.length === 0 ) return;

    this.onNewCharacterFromElementoFilho.emit(this.character)

    this.character.name = '';
    this.character.power = 0;
  }

}
