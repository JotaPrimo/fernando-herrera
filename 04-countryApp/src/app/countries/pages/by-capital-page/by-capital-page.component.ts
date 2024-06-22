import { Component } from '@angular/core';

@Component({
  selector: 'country-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {


  // listener
  listenerSearchBox(capital: string) {
   
    console.log('ByCapitalPageComponent.searchByCapital', capital);

    console.log({capital});
  }

}
