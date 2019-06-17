import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { HouseService } from "../house.service";
import { House } from "../house";
// In this Component we define the House's Details
@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styles: []
})
export class HouseDetailsComponent implements OnInit, OnDestroy {
  house: House;
  sub:any;

  constructor(private route: ActivatedRoute,
              private houseService: HouseService,
              private router: Router) { }

  ngOnInit() { 
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      console.log('getting house with id: ', id);
      this.houseService
        .get(id)
        .subscribe(p => this.house = p);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
/* To get the list of houses in URL Link Clickable format*/
  gotoHousesList(){
    let link = ['/houses'];
    this.router.navigate(link);
  }
}
