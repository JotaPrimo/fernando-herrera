import { NgModule } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../primeNg/primeNg.module';


import { MenubarModule } from 'primeng/menubar';

@NgModule({
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
