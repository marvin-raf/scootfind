import { Action, createReducer, on } from '@ngrx/store';
import * as ScootersActions from './scooters.actions';
import { Scooter } from '@src/app/scooter/scooter.interface';

export interface ScootersState {
  scooters: Scooter[];
  isLoading: boolean;
  error: any;
}

export const initialState: ScootersState = {
  scooters: [],
  isLoading: false,
  error: null
};

const scootersReducer = createReducer(
  initialState,
  on(ScootersActions.getScootersLoad, state => ({...state, isLoading: true})),
  on(ScootersActions.getScootersSuccess, state => ({...state, isLoading: false})),
  on(ScootersActions.getScootersError, (state, {error}) => ({...state, error})),
);

export function reducer(state: ScootersState | undefined, action: Action) {
  return scootersReducer(state, action);
}