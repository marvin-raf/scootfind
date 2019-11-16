import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ScooterAction, getScootersLoad } from '@src/app/store/scooters/scooters.actions';
import { ScootersState } from '@src/app/store/scooters/scooters.reducer';
import { Scooter } from '../../scooter.interface';
import { Coordinate } from '@src/app/shared/interfaces/coordinate.interface';

@Component({
  selector: 'app-scooter-map',
  templateUrl: './scooter-map.component.html',
  styleUrls: ['./scooter-map.component.css'],
})
export class ScooterMapComponent implements OnInit {
  scooters$: Observable<Scooter[]> = this.store.select(state => state.scooters.scooters);
  userLocation$: Observable<Partial<Coordinate>> = this.store.select(state => state.scooters.userLocation);

  constructor(private store: Store<{ scooters: ScootersState }>) {}

  ngOnInit() {
    this.store.dispatch(getScootersLoad());
  }

  onMapReady(args) {
    this.scooters$.subscribe(scooters => {
      for (const scooter of scooters) {
        args.map.addMarkers([
        {
          lat: scooter.coordinate.lat,
          lng: scooter.coordinate.lon,
          title: 'One-line title here',
          subtitle: 'Really really nice location',
        }]);
      }
    });
  }

  getScooterLogo(scooter: Scooter) {
    switch (scooter.type) {
      case 'Lime':
        return 'assets/img/lime-logo.png';
      case 'Beam':
        return 'assets/img/beam-logo.png';
    }
  }

}

