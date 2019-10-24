import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ScooterService } from './scooter.service';
import { ScooterAction, getScootersSuccess } from '../store/scooters/scooters.actions';

@Injectable()
export class ScootersEffects {
  loadScooters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ScooterAction.GetScootersLoad),
      mergeMap(() =>
        this.scooterService.getAll().pipe(
          map(scooters => getScootersSuccess({scooters})),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private scooterService: ScooterService) {}
}
