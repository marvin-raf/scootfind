import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScooterMapComponent } from '@src/app/scooter/components/scooter-map/scooter-map.component';
import { Store, StoreModule } from '@ngrx/store';
import * as scooters from '../store/scooters/scooters.reducer';
import { ScootersEffects } from './scooter.effect';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [ScooterMapComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      scooters: scooters.reducer
    }),
    EffectsModule.forRoot([
      ScootersEffects
    ])
  ],
  providers: [
    Store
  ]
})
export class ScooterModule { }
