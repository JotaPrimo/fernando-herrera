import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// to dos component criado deve declado no seu modulo pai
// se precisar usa-lo em outro modulo devo exportar

// se preciso usar esse componente em outro modulo
// devo importar o modulo onde ele foi declarado

// modules
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyCompomentComponent } from './components/lazyCompoment/lazyCompoment.component';

@NgModule({
  declarations: [
    SidebarComponent,
    LazyCompomentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    LazyCompomentComponent
  ]
})
export class SharedModule { }
