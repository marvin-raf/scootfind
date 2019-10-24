import { createAction, props } from '@ngrx/store';
import { Coordinate } from '@src/app/shared/interfaces/coordinate.interface';
import { Scooter } from '@src/app/scooter/scooter.interface';

export enum ScooterAction {
  GetScootersLoad = '[Scooters API] Get Scooters Load',
  GetScootersSuccess = '[Scooters API] Get Scooters Success',
  GetScootersError = '[Scooters API] Get Scooters Success'
}

export const getScootersLoad = createAction(
  ScooterAction.GetScootersSuccess,
  props<{coordinate: Coordinate}>()
);

export const getScootersSuccess = createAction(
  ScooterAction.GetScootersSuccess,
  props<{scooter: Scooter[]}>()
);

export const getScootersError = createAction(
  ScooterAction.GetScootersError,
  props<{error: any}>()
);
