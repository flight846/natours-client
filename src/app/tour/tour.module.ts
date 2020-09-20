import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourComponent } from './tour.component';
import { TourCardComponent } from './tour-card/tour-card.component';



@NgModule({
  declarations: [
    TourCardComponent,
    TourComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class TourModule { }
