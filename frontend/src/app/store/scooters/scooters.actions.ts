import { createAction, props } from '@ngrx/store';
import { Coordinate } from '@src/app/shared/interfaces/coordinate.interface';
import { Scooter } from '@src/app/scooter/scooter.interface';

export enum ScooterAction {
  GetScootersLoad = '[Scooters API] Get Scooters Load',
  GetScootersSuccess = '[Scooters API] Get Scooters Success',
  GetScootersError = '[Scooters API] Get Scooters Success',
  ChangeUserLocation = '[Scooters API] Change User Location'
}

export const getScootersLoad = createAction(
  ScooterAction.GetScootersLoad
);

export const getScootersSuccess = createAction(
  ScooterAction.GetScootersSuccess,
  props<{scooters: Scooter[]}>()
);

export const getScootersError = createAction(
  ScooterAction.GetScootersError,
  props<{error: any}>()
);

export const changeUserLocation = createAction(
  ScooterAction.ChangeUserLocation,
  props<Coordinate>()
);
