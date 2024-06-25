import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { Observable, catchError, map, of, tap, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private url = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  private getCountriesRequest( url: string): Observable<Country[]> {
    return this.http.get<Country[]>( url )
      .pipe(
        catchError( () => of([]) ),
        delay(1000)
      );
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.url}/alpha/${code}`;

    return this.http.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }

  public searchCapital(term: string): Observable<Country[]> {
    const url = `${this.url}/capital/${term}`;
    return this.getCountriesRequest(url);
  }

  public searchByNameCountry(nameCountry: string): Observable<Country[]> {
    const url = `${this.url}/name/${nameCountry}`;
    return this.getCountriesRequest(url);
  }

  public searchByRegion(region: string): Observable<Country[]> {
    const url = `${this.url}/region/${region}`;
    return this.getCountriesRequest(url);
  }
}
