import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Output() searchEvent = new EventEmitter<string>();

  @Input()
  public placeholder: string = '';

  searchOfNewTerm(value: string): void {
    console.log('SearchBoxComponent.emitValueSearch', value);

    this.searchEvent.emit(value);
  }
}
