import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private url = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCountryByAlphaCode( code: string ): Observable<Country | null> {

    const url = `${ this.url }/alpha/${ code }`;

    return this.http.get<Country[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null ),
        catchError( () => of(null) )
      );
  }


  public searchCapital(term: string): Observable<Country[]> {
    const url = `${this.url}/capital/${term}`;
    return this.http.get<Country[]>(url).pipe(
      catchError((error) => {
        console.error(error);
        return of([]); // retornando um observalbe vazio
      }) // Handle error
    );
  }

  public searchByNameCountry(nameCountry: string): Observable<Country[]> {
    const url = `${this.url}/name/${nameCountry}`;
    return this.http.get<Country[]>(url).pipe(
      catchError((error) => {
        console.error(error);
        return of([]); // retornando um observalbe vazio
      }) // Handle error
    );
  }

  public searchByRegion(region: string): Observable<Country[]> {
    const url = `${this.url}/region/${region}`;
    return this.http.get<Country[]>(url).pipe(
      catchError((error) => {
        console.error(error);
        return of([]); // retornando um observalbe vazio para não dar erro
      })
    );
  }
}
