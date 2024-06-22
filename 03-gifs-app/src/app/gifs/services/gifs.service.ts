import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gisf.interfaces';

const GIPHY_API_KEY = 'euxin7SSGxz3BATEpactx7SQHUxB1Qwj';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(
    private http: HttpClient
  ) {}

  public gifList: Gif[] = [];

  // atributo para guardar dados da listagem
  // isto é para encapsular os dados de forma segura
  private _tagsHistory: string[] = [];
  private apiKey:       string = 'euxin7SSGxz3BATEpactx7SQHUxB1Qwj';
  private serviceUrl:   string = 'https://api.giphy.com/v1/gifs';

  // isto é para expor dados
  get tagsHistory() {
    return [...this._tagsHistory]; // isto retorna uma copia dos dados, não os dados em si
  }

  searchTag( tag: string ):void {
    if ( tag.length === 0 ) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey )
      .set('limit', '10' )
      .set('q', tag )

    this.http.get<SearchResponse>(`${ this.serviceUrl }/search`, { params })
      .subscribe( resp => {

        this.gifList = resp.data;
        // console.log({ gifs: this.gifList });

      });

  }


  // separando lógica
  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0,10);
  }

}
