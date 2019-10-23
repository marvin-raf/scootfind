import { createAction, props } from '@ngrx/store';
import { Coordinate } from '@src/app/shared/interfaces/coordinate.interface';
import { Scooter } from '@src/app/scooter/scooter.interface';

export const getScootersLoad = createAction(
  '[Scooters API] Get Scooters Load',
  props<{coordinate: Coordinate}>()
);

export const getScootersSuccess = createAction(
  '[Scooters API] Get Scooters Success',
  props<{scooter: Scooter[]}>()
);

export const getScootersError = createAction(
  '[Scooters API] Get Scooters Success',
  props<{error: any}>()
);
