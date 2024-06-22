import { Component, ElementRef, ViewChild } from '@angular/core';

// service
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar: </h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gifs"
      (keyup.enter)="searchTag( )"
      #txtTagInput>
  `
})

export class SearchBoxComponent  {

  constructor( private gifsService: GifsService) { }

  // referencia ao elemento de forma local
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;


  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;

    if(newTag.trim().length === 0) return;

    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';

  }

}
