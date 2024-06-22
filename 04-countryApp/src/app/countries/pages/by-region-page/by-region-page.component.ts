import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent implements OnInit {

  private listCountries: Country[] = [];

  constructor(
    private countriesService: CountriesService
  ) { }

  ngOnInit() {
  }

  get countries(): Country[] {
    return this.listCountries;
  }

  public searchByRegiao(regiao: string): void {
    this.countriesService
      .searchByRegion(regiao)
      .subscribe((countries) => {
        this.listCountries = countries;
      });
  }

}
