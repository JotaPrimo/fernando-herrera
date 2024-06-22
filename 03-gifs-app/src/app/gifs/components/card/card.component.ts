import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gisf.interfaces';

@Component({
  selector: 'card-list',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit{

  ngOnInit(): void {
    if( !this.gif ) throw new Error('Parametro inválido.');
  }


  public gif: Gif[] = [];

 }
