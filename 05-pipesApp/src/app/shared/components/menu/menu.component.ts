import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      {label: 'Home', icon: 'pi pi-fw pi-home'},
      {label: 'Open', icon: 'pi pi-fw pi-download'},
      {label: 'Undo', icon: 'pi pi-fw pi-refresh'},
    ];
  }



}
