// modules
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';


// components
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { LoadingSpinnerComponent } from '../shared/components/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    CountryTableComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
  ],
})
export class CountriesModule {}
