import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ScootersState } from '@src/app/store/scooters/scooters.reducer';
import { Coordinate } from '@src/app/shared/interfaces/coordinate.interface';
import { ScooterAction, changeUserLocation } from '@src/app/store/scooters/scooters.actions';

@Component({
  selector: 'app-user-marker',
  templateUrl: './user-marker.component.html',
  styleUrls: ['./user-marker.component.css'],
})
export class UserMarkerComponent implements OnInit {
  private MARKER_UPDATE_DURATION = 10000;
  userLocation$: Observable<Partial<Coordinate>> = this.store.select(state => state.scooters.userLocation);

  constructor(private store: Store<{ scooters: ScootersState } >) {}

  ngOnInit() {
    this.updateUserMarker();
    // setInterval(this.updateUserMarker, this.MARKER_UPDATE_DURATION);
    this.userLocation$.subscribe(location => 'location is now: ' + location + ' ' + location);
    this.updateUserMarker();
  }

  updateUserMarker() {
    navigator.geolocation.getCurrentPosition(position => {
      console.log('Yo, I made it here');
      changeUserLocation({
        lat: Math.random(),
        lon: Math.random(),
      });
    });
  }
}
