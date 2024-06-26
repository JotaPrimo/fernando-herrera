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
  public isLoading: boolean = false;

  constructor(
    private countriesService: CountriesService
  ) {}

  // listener
  listenerSearchBox(capital: string) {
    this.isLoading = true;
    this.countriesService.searchCapital(capital)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }
}
