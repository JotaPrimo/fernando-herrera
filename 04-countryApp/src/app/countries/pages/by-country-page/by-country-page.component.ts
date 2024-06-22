import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent implements OnInit {

  private countries: Country[] = [];

  constructor(
    private countriesService: CountriesService
  ) { }

  ngOnInit() {
  }

  get getCountries(): Country[] {
    return this.countries;
  }

  public searchCountry(term: string): void {
    console.log('ByCountryPageComponent searchCountry');
    this.countriesService.searchByNameCountry(term).subscribe((countries) => {
      this.countries = countries;
    } );
  }

}
