import { Action, createReducer, on } from '@ngrx/store';
import * as ScootersActions from './scooters.actions';
import { Scooter } from '@src/app/scooter/scooter.interface';
import { Coordinate } from '@src/app/shared/interfaces/coordinate.interface';

export interface ScootersState {
  scooters: Scooter[];
  isLoading: boolean;
  error: any;
  userLocation: Partial<Coordinate>;
}

export const initialState: ScootersState = {
  scooters: [],
  isLoading: false,
  error: null,
  userLocation: {
    lat: undefined,
    lon: undefined
  }
};

const scootersReducer = createReducer(
  initialState,
  on(ScootersActions.getScootersLoad, state => ({...state, isLoading: true})),
  on(ScootersActions.getScootersSuccess, (state, { scooters }) => { console.log(scooters); return {...state, isLoading: false, scooters}}),
  on(ScootersActions.getScootersError, (state, {error}) => ({...state, error})),
  on(ScootersActions.changeUserLocation, (state, userLocation) =>  {console.log('it is happening: ' + userLocation); return {...state, userLocation}})
);

export function reducer(state: ScootersState | undefined, action: Action) {
  return scootersReducer(state, action);
}
