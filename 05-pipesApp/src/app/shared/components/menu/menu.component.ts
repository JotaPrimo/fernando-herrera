import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Textos e flechas',
        icon: 'pi pi-fw pi-home',
        items: [
          { label: 'Número', icon: 'pi pi-fw pi-plus' },
          { label: 'Não comunes', icon: 'pi pi-fw pi-globe' },
        ],
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Otro personalizado',
          }
        ]
      }
    ];
  }
}
