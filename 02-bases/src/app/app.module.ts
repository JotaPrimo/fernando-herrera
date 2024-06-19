import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

// componentes
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';


// modules
import { HeroesModule } from './heroes/heroes.module';

// componentes de outros modulos devem ser declarados em declarations
// para que possam ser usados

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
