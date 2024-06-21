import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor() {}

  // atributo para guardar dados da listagem
  // isto é para encapsular os dados de forma segura
  private _tagsHistory: string[] = [];

  // isto é para expor dados
  get tagsHistory() {
    return [...this._tagsHistory]; // isto retorna uma copia dos dados, não os dados em si
  }

  searchTag(tag: string): void {
    if (tag.trim().length === 0) return;
    this.organizeHistory(tag);
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
