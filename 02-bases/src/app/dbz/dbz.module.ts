import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// componentes
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

@NgModule({
  declarations: [
    MainPageComponent,
    AddCharacterComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
