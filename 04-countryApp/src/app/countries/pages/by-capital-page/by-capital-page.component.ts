import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css',
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(
    private countriesService: CountriesService
  ) {}

  // listener
  listenerSearchBox(capital: string) {
    console.log('ByCapitalPageComponent.searchByCapital', capital);
    console.log({ capital });
    this.countriesService.searchCapital(capital)
      .subscribe(countries => {
        console.log({ countries });
        this.countries = countries;
      });
  }
}
