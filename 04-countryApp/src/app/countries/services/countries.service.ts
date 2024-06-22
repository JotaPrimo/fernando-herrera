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

  public searchCapital(term: string): Observable<Country[]> {
    const url = `${this.url}/capital/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError( error => {
          console.error(error);
          return of([]);  // retornando um observalbe vazio
        }) // Handle error
      );
  }
}
