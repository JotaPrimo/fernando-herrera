import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Output()
  public eventDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunk',
      power: 10,
    },
  ];

  emitEventDeleteElementoFilho(id?: string): void {
    console.log('emitEventDeleteElementoFilho');

    if ( !id ) return;

    this.eventDelete.emit(id);
  }

}
