import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ScooterAction } from '@src/app/store/scooters/scooters.actions';
import { ScootersState } from '@src/app/store/scooters/scooters.reducer';
import { Scooter } from '../../scooter.interface';

@Component({
  selector: 'app-scooter-map',
  templateUrl: './scooter-map.component.html',
  styleUrls: ['./scooter-map.component.css'],
})
export class ScooterMapComponent implements OnInit {
  scooters$: Observable<Scooter[]> = this.store.select(state => state.scooters.scooters);

  constructor(private store: Store<{ scooters: ScootersState }>) {}

  ngOnInit() {
    this.store.dispatch({type: ScooterAction.GetScootersLoad});
    console.log('I have been initted');
  }

  onMapReady(args) {
    console.log("The map is ready");
    this.scooters$.subscribe(scooters => {
      console.log("I have received a subscribed event");
      console.log(scooters);
      for (const scooter of scooters) {
        console.log(scooter.coordinate);
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

