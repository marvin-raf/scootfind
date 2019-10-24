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
    this.scooters$.subscribe(scooter => console.log("The answer was: " + scooter));
  }
}
