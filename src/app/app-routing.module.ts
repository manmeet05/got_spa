import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseListComponent } from "./house-list/house-list.component";
import { HouseDetailsComponent } from "./house-details/house-details.component";

// Route config let's you map routes to components
const routes: Routes = [
  // map '/houses' to the people list component
  {
    path: 'houses',
    component: HouseListComponent,
  },
  // map '/houses/:id' to house details component
  {
    path: 'houses/:id', 
    component: HouseDetailsComponent 
  },
  // map '/' to '/houses' as our default route
  {
    path: '',
    redirectTo: '/houses',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
