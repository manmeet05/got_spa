import { Component, OnInit } from '@angular/core';
import { House } from '../house';
import { HouseService } from "../house.service";
// In this Component we define the Houses List
@Component({
  selector: 'app-house-list',
  template: `

  <section *ngIf="isLoading && !errorMessage">
  Loading our hyperdrives!!! Retrieving data...
  </section>
  <!-- this is the new syntax for ng-repeat -->
  <ul>
    <li *ngFor="let house of house">
      <a [routerLink]="['/houses', house.id]">
        {{house.name}} 
      </a>
    </li>
  </ul>
  <!-- HERE: added this error message -->
  <section *ngIf="errorMessage">
    {{errorMessage}}
  </section>
  `,
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {
  house: House[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private houseService: HouseService) { }

  ngOnInit(){
    this.houseService
      .getAll()
      .subscribe(
         /* happy path */ p => this.house = p,
         /* error path */ e => this.errorMessage = e,
         /* onCompleted */ () => this.isLoading = false);
  }

}
