import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScooterMapComponent } from '@src/app/scooter/components/scooter-map/scooter-map.component';
import { Store, StoreModule } from '@ngrx/store';
import * as scooters from '@src/app/store/scooters/scooters.reducer';
import { ScootersEffects } from '@src/app/scooter/scooter.effect';
import { EffectsModule } from '@ngrx/effects';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { UserMarkerComponent } from '@src/app/scooter/components/user-marker/user-marker.component';

const accessToken = 'pk.eyJ1IjoicmFmYWVsZ29lc21hbm4iLCJhIjoiY2syNm9ndWs1MzNydDNkbXQ2eGJqanF3NyJ9.4u0Y4JWKl17VYkZVk8FOIw';

@NgModule({
  declarations: [ScooterMapComponent, UserMarkerComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      scooters: scooters.reducer,
    }),
    EffectsModule.forRoot([ScootersEffects]),
    NgxMapboxGLModule.withConfig({
      accessToken: accessToken, // Optional, can also be set per map (accessToken input of mgl-map)
    }),
  ],
  providers: [Store],
})
export class ScooterModule {}
