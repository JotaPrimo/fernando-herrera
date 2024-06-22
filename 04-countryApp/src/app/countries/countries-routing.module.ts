// modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';


// components
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes: Routes = [
  {
    path: 'by-capital',
    component: ByCapitalPageComponent,
  },
  {
    path: 'by-country',
    component: ByCountryPageComponent,
  },
  {
    path: 'by-region',
    component: ByRegionPageComponent,
  },
  {
    path: 'by/:id',
    component: CountryPageComponent,
  },
  {
    // qualquer rota não definida será redirecionada para a rota 'home'
    path: '**',
    redirectTo: 'by-capital'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild( routes ),
  ],
  exports: [ RouterModule ],
  declarations: [],
  providers: [],
})
export class CountriesRoutingModule {}
