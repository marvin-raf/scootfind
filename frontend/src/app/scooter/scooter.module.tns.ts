import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ScooterMapComponent } from '@src/app/scooter/components/scooter-map/scooter-map.component';
import { StoreModule, Store } from '@ngrx/store';
import * as scooters from '@src/app/store/scooters/scooters.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ScootersEffects } from '@src/app/scooter/scooter.effect';

import { registerElement } from 'nativescript-angular/element-registry';
import { UserMarkerComponent } from '@src/app/scooter/components/user-marker/user-marker.component';
registerElement('Mapbox', () => require('nativescript-mapbox').MapboxView);

@NgModule({
  declarations: [ScooterMapComponent, UserMarkerComponent],
  imports: [
    NativeScriptCommonModule,
    StoreModule.forRoot({
      scooters: scooters.reducer,
    }),
    EffectsModule.forRoot([ScootersEffects]),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [Store],
})
export class ScooterModule {}
