import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Scooter } from '../../scooter.interface';
import { Store } from '@ngrx/store';
import { ScooterAction } from '@src/app/store/scooters/scooters.actions';


@Component({
  selector: 'app-scooter-map',
  templateUrl: './scooter-map.component.html',
  styleUrls: ['./scooter-map.component.css'],
})
export class ScooterMapComponent implements OnInit {
  scooters$: Observable<Scooter[]> = this.store.select(state => state.scooters);

  constructor(private store: Store<{ scooters: Scooter[] }>) {}

  ngOnInit() {
    this.store.dispatch({type: ScooterAction.GetScootersLoad});
  }
}
