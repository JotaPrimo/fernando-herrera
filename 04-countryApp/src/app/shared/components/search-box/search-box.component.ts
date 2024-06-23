import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent implements OnInit,OnDestroy {
  // usado para evitar que a função seja chamada muitas vezes
  // é um observable
  private debouncer: Subject<string> = new Subject();
  private debouncerSubscription?: Subscription;

  constructor() {}

  ngOnInit() {
    this.debouncerSubscription = this.debouncer
      .pipe(
        debounceTime(1000)
      )
      .subscribe((value) => this.searchOfNewTerm(value));
  }

  ngOnDestroy(): void {
    // não preciosar ficar escutando o evento debouncer
    this.debouncer.unsubscribe();
  }


  @Output() searchEvent = new EventEmitter<string>();
  @Output() onDebounce = new EventEmitter<string>();

  @Input()
  public placeholder: string = '';

  searchOfNewTerm(value: string): void {
    this.onDebounce.emit(value);
  }

  // busca sem clicar no enter
  onKeyPress(searchTerm: string): void {
    // está enviando o valor via debouncer quando parar de digitar
    this.debouncer.next(searchTerm);
  }
}
