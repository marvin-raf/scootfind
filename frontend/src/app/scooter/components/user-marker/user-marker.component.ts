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
    this.watchUserLocation();
    this.userLocation$.subscribe(userLocation => console.log(userLocation));
  }

  watchUserLocation() {
    navigator.geolocation.watchPosition(this.positionChanged, this.errorCallback, {
      enableHighAccuracy: true
    });
  }

  positionChanged = (position: Position) => {















    
    this.store.dispatch(changeUserLocation({
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    }));
  }

  updateUserMarker = () => {
    const navigatorOptions = {
      enableHighAccuracy: true
    };

    navigator.geolocation.getCurrentPosition(position => {
      this.store.dispatch(changeUserLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      }));
    }, this.errorCallback, navigatorOptions);
  }

  errorCallback = () => {
    console.log("There was an error yeet");
  }
}
