import { Component } from '@angular/core';

// services
import { DBZService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

// construtor
constructor(
 public dbzService: DBZService
) {}


get characters(): Character[] {
  return this.dbzService.characters;
}

}
