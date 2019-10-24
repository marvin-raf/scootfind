import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScooterMapComponent } from '@src/app/scooter/components/scooter-map/scooter-map.component';

@NgModule({
  declarations: [ScooterMapComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ScooterMapComponent
  ]
})
export class ScooterModule { }
