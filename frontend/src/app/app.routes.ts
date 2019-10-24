import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/home/home.component';
import { ScooterMapComponent } from './scooter/components/scooter-map/scooter-map.component';

export const routes: Routes = [
  {
    path: '',
    component: ScooterMapComponent
  }
];
