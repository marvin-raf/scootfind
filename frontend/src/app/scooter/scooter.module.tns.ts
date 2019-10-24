import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ScooterMapComponent } from '@src/app/scooter/components/scooter-map/scooter-map.component';

@NgModule({
  declarations: [ScooterMapComponent],
  imports: [
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ScooterModule { }
